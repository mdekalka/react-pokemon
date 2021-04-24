import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { httpRequest } from '../workflows/httpWorkflow';
import { RootState } from '../store/store';


interface  EvolutionState {
  entities: { [key: string]: any },
  fetching: boolean,
  error: null | Error
}

const initialState: EvolutionState = {
  entities: {},
  fetching: false,
  error: null
}

const normalizeSpeciesData = (speciesData: any) => {
  if (!speciesData) return;

  const { base_happiness, capture_rate, generation, name, id } = speciesData;

  return { hapiness: base_happiness, captureRate: capture_rate, generation, curentForm: { name, id } };
}

const constructEvolutionChain = (evolutionData) => {
  if (!evolutionData) return;

  const evolvingChain = [];
  const findEvolutionNode = (evolutionChain) => {
    if (!evolutionChain || !evolutionChain.species) return;

    if (evolutionChain.species) {
      evolvingChain.push(evolutionChain.species);

      findEvolutionNode(evolutionChain.evolves_to[0]);
    }
  }

  findEvolutionNode(evolutionData.chain);

  return evolvingChain;
}

export const fetchPokemonSpecies = createAsyncThunk<any, number, {state: RootState}>('evolution/fetchPokemonSpecies', async (pokemonId, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;
  const store = getState();
  const pokemonEntity = store.pokemons.entities[pokemonId];

  if (!pokemonEntity) {
    return { data: null, error: 'No data available', responseDate: Date.now() };
  }

  const speciesUrl = pokemonEntity.species.url;
  const response = await httpRequest(speciesUrl);

  if (!response.error) {
    const evolutionChainUrl = response.data?.evolution_chain?.url;

    dispatch(fetchPokemonEvolutionChain({ url: evolutionChainUrl, id: pokemonEntity.id }));
  }

  return response;
});

export const fetchPokemonEvolutionChain = createAsyncThunk('evolution/fetchPokemonEvolutionChain', async ({ url }: { url: string, id: number }) => {
  const response = await httpRequest(url);

  return response;
});

export const evolutionSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonSpecies.pending, (state) => {
      state.fetching = true;
    });

    builder.addCase(fetchPokemonSpecies.fulfilled, (state, action) => {
      const { data, error } = action.payload;

      if (error) {
        state.fetching = false;
        state.error = error;
        return;
      }
      state.entities[data.id] = normalizeSpeciesData(data);
    });

    builder.addCase(fetchPokemonEvolutionChain.fulfilled, (state, action) => {
      const { data, error } = action.payload;

      if (error) {
        state.fetching = false;
        state.error = error;
        return;
      }

      state.fetching = false;

      const { id } = action.meta.arg;
      const entity = state.entities[id];

      if (entity) {
        entity.evolutionChain = constructEvolutionChain(data);
      }
    });
  }
})

export const selectFetching = (state: RootState) => {
  return state.evolution.fetching;
}


export default evolutionSlice.reducer

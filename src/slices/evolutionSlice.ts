import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { httpRequest } from '../workflows/httpWorkflow';
import { RootState } from '../store/store';


interface Species {
  hapiness?: number
  captureRate?: number
  generation?: string
  curentForm?: string
}
interface EvolutionChain {
  [index: number]: string
}
interface Evolution extends Species {
  chain?: EvolutionChain
}
interface Entity {
  fetching: boolean,
  error: null | Error,
  evolution: Evolution
}
interface  EvolutionState {
  entities: { [key: string]: Entity }
}


const initialState: EvolutionState = {
  entities: {}
}

const normalizeSpeciesData = (speciesData: any): Species => {
  const { base_happiness, capture_rate, generation, name } = speciesData;

  return {
    hapiness: base_happiness,
    captureRate: capture_rate,
    generation: generation.name,
    curentForm: name
  };
}

const constructEvolutionChain = (evolutionData) => {
  if (!evolutionData) return;

  const evolvingChain = [];
  const findEvolutionNode = (evolutionChain) => {
    if (!evolutionChain || !evolutionChain.species) return;

    if (evolutionChain.species) {
      evolvingChain.push(evolutionChain.species.name);

      findEvolutionNode(evolutionChain.evolves_to[0]);
    }
  }

  findEvolutionNode(evolutionData.chain);

  return evolvingChain;
}

const createEvolutionEntity = (entity: Partial<Entity>) => {
  return {
    fetching: false,
    error: null,
    evolution: {},
    ...entity
  }
}

const getEntityById = (state: EvolutionState, id: number) => {
  return state.entities[id];
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
    builder.addCase(fetchPokemonSpecies.pending, (state, action) => {
      const id = action.meta.arg;
      const entity = getEntityById(state, id);

      if (entity) {
        entity.fetching = true;
      } else {
        state.entities[id] = createEvolutionEntity({ fetching: true });
      }
    });

    builder.addCase(fetchPokemonSpecies.fulfilled, (state, action) => {
      const { data, error } = action.payload;
      const id = action.meta.arg;
      const entity = getEntityById(state, id);

      if (error) {
        entity.fetching = false;
        entity.error = error
        return;
      }

      entity.evolution = normalizeSpeciesData(data);
    });

    builder.addCase(fetchPokemonEvolutionChain.fulfilled, (state, action) => {
      const { data, error } = action.payload;
      const { id } = action.meta.arg;
      const entity = getEntityById(state, id);

      if (error) {
        entity.fetching = false;
        entity.error = error;
        return;
      }

      entity.fetching = false;
      entity.evolution.chain = constructEvolutionChain(data);
    });
  }
})

export const selectEvolution = (state: RootState, pokemonId: number) => {
  const entity = getEntityById(state.evolution, pokemonId);

  return entity;
}


export default evolutionSlice.reducer

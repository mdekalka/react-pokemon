import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { httpRequest } from '../workflows/httpWorkflow';
import { RootState } from '../store/store';

interface Species {
  hapiness?: number
  captureRate?: number
  generation?: string
  curentForm?: string
}
export interface Evolution extends Species {
  nextForm?: string
  previousForm?: string
}

interface Entity {
  fetching: boolean,
  error: null | Error,
  state: string,
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

const findEvolutionForms = (evolutionData, currentFormName: string) => {
  if (!evolutionData) return;

  const chain: string[] = [];
  const fillEvolutionChain = (evolutionChain) => {
    if (!evolutionChain || !evolutionChain.species) return;

    if (evolutionChain.species) {
      chain.push(evolutionChain.species.name);

      const current = evolutionChain.evolves_to.find(({ species }) => species?.name === currentFormName);

      fillEvolutionChain(current || evolutionChain.evolves_to[0]);
    }
  }

  fillEvolutionChain(evolutionData.chain);

  const curentFormIndex = chain.findIndex(name => name === currentFormName);

  return {
    previousForm: chain[curentFormIndex - 1],
    nextForm: chain[curentFormIndex + 1]
  }
}

const createEvolutionEntity = (entity: Partial<Entity>) => {
  return {
    fetching: false,
    error: null,
    state: 'idle',
    evolution: {},
    ...entity
  }
}

const getEntityByName = (state: EvolutionState, name: string) => {
  return state.entities[name];
}

export const fetchPokemonSpecies = createAsyncThunk<any, string, { state: RootState }>('evolution/fetchPokemonSpecies', async (pokemonName, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;
  const store = getState();
  const pokemonEntity = store.pokemons.entities[pokemonName];

  if (!pokemonEntity) {
    return { data: null, error: 'No data available', responseDate: Date.now() };
  }

  const speciesUrl = pokemonEntity.species.url;
  const response = await httpRequest(speciesUrl);

  if (!response.error) {
    const evolutionChainUrl = response.data?.evolution_chain?.url;

    dispatch(fetchPokemonEvolutionChain({ url: evolutionChainUrl, name: pokemonEntity.name }));
  }

  return response;
});

export const fetchPokemonEvolutionChain = createAsyncThunk('evolution/fetchPokemonEvolutionChain', async ({ url }: { url: string, name: string }) => {
  const response = await httpRequest(url);

  return response;
});

export const evolutionSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonSpecies.pending, (state, action) => {
      const name = action.meta.arg;
      const entity = getEntityByName(state, name);

      if (entity) {
        entity.fetching = true;
      } else {
        state.entities[name] = createEvolutionEntity({ fetching: true });
      }
    });

    builder.addCase(fetchPokemonSpecies.fulfilled, (state, action) => {
      const { data, error } = action.payload;
      const name = action.meta.arg;
      const entity = getEntityByName(state, name);

      if (error) {
        entity.fetching = false;
        entity.error = error
        return;
      }

      entity.evolution = normalizeSpeciesData(data);
    });

    builder.addCase(fetchPokemonEvolutionChain.fulfilled, (state, action) => {
      const { data, error } = action.payload;
      const { name } = action.meta.arg;
      const entity = getEntityByName(state, name);

      if (error) {
        entity.fetching = false;
        entity.error = error;
        entity.state = 'finished';
        return;
      }

      const { previousForm, nextForm } = findEvolutionForms(data, entity.evolution.curentForm);

      entity.fetching = false;
      entity.state = 'finished';
      entity.evolution.previousForm = previousForm;
      entity.evolution.nextForm = nextForm;
    });
  }
})

export const selectEvolution = (state: RootState, pokemonName: string) => {
  const entity = getEntityByName(state.evolution, pokemonName);

  return entity;
}


export default evolutionSlice.reducer

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { httpRequest } from '../workflows/httpWorkflow';
import { getSearchFromUrl } from '../utils/url';
import { RootState } from '../store/store'; 

interface PokemonList {
  name: string;
  url: string;
}

interface  PokemonState {
  list: PokemonList[],
  listFetching: boolean,
  nextUrlParams: string,
  previousUrlParams: string,
  entities: { [key: string]: any },
  entitiesFetching: boolean,
  error: null | Error
}

const initialState: PokemonState = {
  list: [],
  listFetching: false,
  nextUrlParams: '',
  previousUrlParams: '',
  entities: {},
  entitiesFetching: false,
  error: null
}

export const fetchPokemons = createAsyncThunk('pokemon/fetchPokemons', async (_, { dispatch }) => {
  const response = await httpRequest('/pokemon?limit=8');

  if (!response.error) {
    const pokemonsUrls = response.data?.results.map((result: PokemonList) => result.url);

    dispatch(fetchPokemonsInfo(pokemonsUrls));
  }

  return response;
})

const fetchPokemonsInfo = createAsyncThunk('pokemon/fetchPokemonsInfo', async (urlList: string[]) => {
  return Promise.all(urlList.map(url => httpRequest(url)))
    .then(response => {
      return { data: response, error: null, responseDate: Date.now() };
    });
})

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.pending, (state) => {
      state.listFetching = true;
    });

    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      const { data, error } = action.payload;
      const nextUrlParams = data.next ? getSearchFromUrl(data.next) : '';
      const previousUrlParams = data.previous ? getSearchFromUrl(data.previous) : '';

      if (error) {
        state.listFetching = false;
        state.error = error;
        return;
      }

      state.list = data.results;
      state.listFetching = false;
      state.nextUrlParams = nextUrlParams;
      state.previousUrlParams = previousUrlParams;
    });

    builder.addCase(fetchPokemonsInfo.pending, (state) => {
      state.entitiesFetching = true;
    });

    builder.addCase(fetchPokemonsInfo.fulfilled, (state, action) => {
      const { data, error } = action.payload;

      if (error) {
        state.entitiesFetching = false;
        state.error = error;
        return;
      }

      state.entitiesFetching = false;
      data.forEach(({ data }) => state.entities[data.name] = data);
    })
  }
})

export const selectPokemons = (state: RootState) => {
  const { list, entities, entitiesFetching } = state.pokemons;

  return entitiesFetching ? [] : list.map(({ name }) => entities[name]);
}

export const selectPokemonByName = (state: RootState, name: string) => {
  return state.pokemons.entities[name];
}

// Action creators are generated for each case reducer function
// export const { } = pokemonsSlice.actions

export default pokemonsSlice.reducer
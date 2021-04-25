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
  nextUrl: string,
  previousUrl: string,
  entities: { [key: string]: any },
  entitiesFetching: boolean,
  error: null | Error
}

const initialState: PokemonState = {
  list: [],
  listFetching: false,
  nextUrl: '',
  previousUrl: '',
  entities: {},
  entitiesFetching: false,
  error: null
}

interface FetchPokemonsOptions {
  limit?: number
  next?: boolean
  previous?: boolean
}

const getPokemonsUrl = (state: RootState, options: FetchPokemonsOptions) => {
  const { pokemons } = state;
  const defaultOptions = { limit: 10, previous: false, next: false };
  const requestOptions = { ...defaultOptions, ...options };

  return requestOptions.next ? pokemons.nextUrl : requestOptions.previous ? pokemons.previousUrl : `/pokemon?limit=${requestOptions.limit}`;
}

export const fetchPokemons = createAsyncThunk<any, FetchPokemonsOptions, { state: RootState }>('pokemon/fetchPokemons', async (options, { dispatch, getState }) => {
  const url = getPokemonsUrl(getState(), options)
  const response = await httpRequest(url);

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

      if (error) {
        state.listFetching = false;
        state.error = error;
        return;
      }

      state.list = data.results;
      state.listFetching = false;
      state.nextUrl = data.next;
      state.previousUrl = data.previous;
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

export const selectPokemons = (state: RootState, size: number) => {
  const { list, entities, entitiesFetching } = state.pokemons;

  return entitiesFetching ? [] : list.slice(0, size).map(({ name }) => entities[name]);
}

export const selectPokemonByName = (state: RootState, name: string) => {
  return state.pokemons.entities[name];
}

export const selectFetching = (state: RootState) => {
  return state.pokemons.listFetching || state.pokemons.entitiesFetching;
}

export const selectUrls = (state: RootState) => {
  return {
    previousUrl: state.pokemons.previousUrl,
    nextUrl: state.pokemons.nextUrl,
  }
}

// Action creators are generated for each case reducer function
// export const { } = pokemonsSlice.actions

export default pokemonsSlice.reducer
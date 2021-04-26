import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { httpRequest } from '../workflows/httpWorkflow';
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
  error: null | Error,
  responseDate: number
}

const initialState: PokemonState = {
  list: [],
  listFetching: false,
  nextUrl: '',
  previousUrl: '',
  entities: {},
  entitiesFetching: false,
  error: null,
  responseDate: 0
}

interface FetchPokemonsOptions {
  limit?: number
  page?: number
  next?: boolean
  previous?: boolean
}

const getPokemonsUrl = (state: RootState, options: FetchPokemonsOptions) => {
  const { pokemons } = state;
  const defaultOptions = { limit: 8, previous: false, next: false, page: 0 };
  const requestOptions = { ...defaultOptions, ...options };
  const params = [`offset=${(requestOptions.page - 1) * requestOptions.limit}`, `limit=${requestOptions.limit}`, ]

  return requestOptions.next ? pokemons.nextUrl : requestOptions.previous ? pokemons.previousUrl : `/pokemon?${params.join('&')}`;
}

export const fetchPokemons = createAsyncThunk<any, FetchPokemonsOptions, { state: RootState }>('pokemon/fetchPokemons', async (options, { dispatch, getState }) => {
  const url = getPokemonsUrl(getState(), options)
  const response = await httpRequest(url);

  if (!response.error) {
    dispatch(fetchPokemonsInfo(response.data?.results));
  }

  return response;
})

const getPokemonsInfoUrls = (store: RootState, pokemonList: PokemonList[]) => {
  const { pokemons } = store;

  // Check if requested pokemons already in the cache, if not just return related url
  return pokemonList.reduce((result: string[], current: PokemonList): string[] => {
    const pokemonEntity = pokemons.entities[current.name];

    if (!pokemonEntity) {
      result.push(current.url);
    }

    return result;
  }, []);
}

export const fetchPokemonsInfo = createAsyncThunk<any, PokemonList[], { state: RootState }>('pokemon/fetchPokemonsInfo', async (pokemonList, { getState }) => {
  const requestUrls = getPokemonsInfoUrls(getState(), pokemonList);

  return Promise.all(requestUrls.map(url => httpRequest(url)))
    .then(response => {
      return { data: response, error: null, responseDate: Date.now() };
    });
})

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    resetPokemonsInfo(state) {
      state.entities = {};
    }
  },
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
      const { data, error, responseDate } = action.payload;

      if (error) {
        state.entitiesFetching = false;
        state.error = error;
        return;
      }

      state.entitiesFetching = false;
      state.responseDate = responseDate;
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
export const { resetPokemonsInfo } = pokemonsSlice.actions

export default pokemonsSlice.reducer

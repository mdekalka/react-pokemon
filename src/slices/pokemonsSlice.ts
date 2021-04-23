import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { httpRequest } from '../workflows/httpWorkflow';
import { getSearchFromUrl } from '../utils/url';
import { getLastCharBeforeSlash } from '../utils/string';
import { RootState } from '../store/store'; 

interface PokemonListResponse {
  name: string;
  url: string;
}

interface PokemonList extends PokemonListResponse {
  id: string
}

interface  PokemonState {
  currentList: PokemonList[],
  nextUrlParams: string,
  previousUrlParams: string,
  entities: { [key: string]: any },
  fetching: boolean,
  error: null | Error
}

const initialState: PokemonState = {
  currentList: [],
  nextUrlParams: '',
  previousUrlParams: '',
  entities: {},
  fetching: false,
  error: null
}

export const fetchPokemons = createAsyncThunk('pokemon/fetchPokemons', async (_, { dispatch }) => {
  const response = await httpRequest('/pokemon');

  if (!response.error) {
    const pokemonsUrls = response.data?.results.map((result: PokemonListResponse) => result.url);

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

const formatListResults = (results: PokemonListResponse[]) => {
  return results.map(({ name, url }) => ({ id: getLastCharBeforeSlash(url), name, url }));
}

const handleError = (state: PokemonState, error: PokemonState['error']) => {
  state.fetching = false;
  state.error = error;
}

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.pending, (state) => {
      state.fetching = true;
    });

    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      const { data, error } = action.payload;
      const nextUrlParams = data.next ? getSearchFromUrl(data.next) : '';
      const previousUrlParams = data.previous ? getSearchFromUrl(data.previous) : '';

      if (error) return handleError(state, error);

      state.currentList = formatListResults(data.results);
      state.nextUrlParams = nextUrlParams;
      state.previousUrlParams = previousUrlParams;
    });

    builder.addCase(fetchPokemonsInfo.fulfilled, (state, action) => {
      const { data, error } = action.payload;

      if (error) return handleError(state, error);

      state.fetching = false;
      data.forEach(({ data }) => state.entities[data.id] = data)
    })
  }
})

export const selectPokemons = (state: RootState) => {
  const { currentList, entities, fetching } = state.pokemons;

  return fetching ? [] : currentList.map(({ id }) => entities[id]);
}

// Action creators are generated for each case reducer function
// export const { } = pokemonsSlice.actions

export default pokemonsSlice.reducer
import { configureStore } from '@reduxjs/toolkit';

import pokemonsSlice from '../slices/pokemonsSlice';
import evolutionSlice from '../slices/evolutionSlice';

import { pokemonCacheMiddleware } from '../middleware/pokemonCacheMiddleware';


const store =  configureStore({
  reducer: {
    pokemons: pokemonsSlice,
    evolution: evolutionSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonCacheMiddleware)
})

export type RootState = ReturnType<typeof store.getState>

export default store;

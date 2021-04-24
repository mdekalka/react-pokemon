import { configureStore } from '@reduxjs/toolkit';

import pokemonsSlice from '../slices/pokemonsSlice';
import evolutionSlice from '../slices/evolutionSlice';


const store =  configureStore({
  reducer: {
    pokemons: pokemonsSlice,
    evolution: evolutionSlice
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store;

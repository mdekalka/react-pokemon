import { configureStore } from '@reduxjs/toolkit';

import pokemonsSlice from '../slices/pokemonsSlice'


const store =  configureStore({
  reducer: {
    pokemons: pokemonsSlice
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store;

import { configureStore } from '@reduxjs/toolkit';
import pokemonsSlice from '../slices/pokemonsSlice'

export default configureStore({
  reducer: {
    pokemons: pokemonsSlice
  },
})

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchPokemons } from '../slices/pokemonsSlice';

export const PokemonApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  
  return (
    <div>asfd</div>
  )
}

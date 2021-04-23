import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPokemons, selectPokemons } from '../slices/pokemonsSlice';
import { PokemonList } from './PokemonList';

import './PokemonApp.scss';

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(selectPokemons);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  return (
    <div className="pokemon-app">
      <PokemonList pokemons={pokemons} />
    </div>
  )
}

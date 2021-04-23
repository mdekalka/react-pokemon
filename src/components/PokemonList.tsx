import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPokemons, selectPokemons } from '../slices/pokemonsSlice';
import { PokemonCard } from './PokemonCard';

import './PokemonList.scss';

interface PokemonListProps {
  pokemons: any[];
}

export const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <div className="pokemon-list">
      {pokemons.map(pokemon => <PokemonCard key={pokemon.id}  pokemon={pokemon} />)}
    </div>
  )
}

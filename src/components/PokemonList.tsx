import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPokemons, selectPokemons } from '../slices/pokemonsSlice';
import { getPokemonAttributes, getPokemonTypes, getAttributeLevel, getPokemonImage } from '../utils/pokemon';
import { PokemonCard } from './PokemonCard';
import { PokemonEvolution } from './PokemonEvolution';
import { PokemonAttributes } from './PokemonAttributes';

import './PokemonList.scss';


interface PokemonListProps {
  pokemons: any[];
}

const attributes = [
  { name: 'attack', alias: 'atck' },
  { name: 'defense', alias: 'def' },
  { name: 'special-attack', alias: 'spec. atck' },
  { name: 'special-defense', alias: 'spec. def' },
  { name: 'speed', alias: 'def' }
]

export const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <div className="pokemon-list">
      {pokemons.map(pokemon => {
        return (
          <PokemonCard key={pokemon.id}  pokemon={pokemon}>
            <PokemonEvolution pokemon={pokemon} onHandleClick={() => {}} />
            <PokemonAttributes pokemon={pokemon} attributes={attributes} />
          </PokemonCard>
        )
      })}
    </div>
  )
}

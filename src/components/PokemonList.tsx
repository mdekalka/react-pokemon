import { PokemonCard } from './PokemonCard';
import { PokemonEvolution } from './PokemonEvolution';
import { PokemonAttributes } from './PokemonAttributes';

import './PokemonList.scss';


interface PokemonListProps {
  pokemons: any[]
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
              <PokemonEvolution pokemon={pokemon} />
              <PokemonAttributes pokemon={pokemon} attributes={attributes} />
            </PokemonCard>
          )
        })}
      </div>
  )
}

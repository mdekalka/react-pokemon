import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

import { PokemonCard } from './PokemonCard';
import { PokemonEvolution } from './PokemonEvolution';
import { PokemonAttributes } from './PokemonAttributes';

import './PokemonList.scss';


interface PokemonListProps {
  pokemons: any[];
  onPokemonsLoad: (direction: number) => void;
  urls: { previousUrl: string, nextUrl: string };
  fetching: boolean
}

const attributes = [
  { name: 'attack', alias: 'atck' },
  { name: 'defense', alias: 'def' },
  { name: 'special-attack', alias: 'spec. atck' },
  { name: 'special-defense', alias: 'spec. def' },
  { name: 'speed', alias: 'def' }
]

export const PokemonList = ({ pokemons, onPokemonsLoad, urls, fetching }: PokemonListProps) => {
  return (
    <>
      {urls.previousUrl && (
        <button className="pokemon-btn-load pokemon-btn-left" disabled={fetching} onClick={() => onPokemonsLoad(0)}>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </button>
      )}
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
      {urls.nextUrl && (
        <button className="pokemon-btn-load pokemon-btn-right" disabled={fetching} onClick={() => onPokemonsLoad(1)}>
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </button>
      )}
    </>
  )
}

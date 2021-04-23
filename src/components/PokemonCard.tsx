import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { getPokemonAttributes, getPokemonTypes } from '../utils/pokemon'
import { PokemonType } from './PokemonType';

import './PokemonCard.scss';

interface PokemonCardProps {
  pokemon: any
}

const getPokemonImage = (pokemonId: string) => {
  return `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`;
}

const getAttributeLevel = (value: number) => {
  const highThreshold = 80;
  const mediumThreshold = 50;

  switch (true) {
    case value >= highThreshold:
      return 'high';

    case value >= mediumThreshold:
      return 'medium';

    default:
      return 'low';
  }
}

const mainAttributes = [{ name: 'hp', alias: 'HP'}];
const additionalAttributes = [
  { name: 'attack', alias: 'atck' },
  { name: 'defense', alias: 'def' },
  { name: 'special-attack', alias: 'spec. atck' },
  { name: 'special-defense', alias: 'spec. def' },
  { name: 'speed', alias: 'def' }
]

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { id, name, height, weight } = pokemon;
  const types = getPokemonTypes(pokemon);
  const hpAttribute = getPokemonAttributes(pokemon, mainAttributes);
  const attributes = getPokemonAttributes(pokemon, additionalAttributes);

  return (
    <div className="pokemon-card">
      <header>
        <p className="pokemon-name">{name}</p>
        <FontAwesomeIcon icon={faHeart} className="pokemon-hp-icon" />
        <span className="pokemon-hp">{hpAttribute[0]?.value}HP</span>
        <ul className="pokemon-types reset-list">{types.map(type => <li ><PokemonType type={type} /></li>)}</ul>
        <div className="pokemon-label">Height: {height} | Weight: {weight}</div>
      </header>
      <img className="pokemon-image" src={getPokemonImage(id)} alt={name} />
      <hr className="pokemon-separator with-icon" />
      <div className="pokemon-evolution">

      </div>
      <hr className="pokemon-separator" />
      <ul className="pokemons-attributes reset-list">
        {attributes.map(({ alias, value }) => (
          <li className="pokemons-attributes-item">
            <div className="pokemons-attributes-name">{alias}</div>
            <div className={`pokemons-attributes-value ${getAttributeLevel(value)}`}>{value}</div>
          </li>
        ))}
      </ul>

    </div>
  )
}

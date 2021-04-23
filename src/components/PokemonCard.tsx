import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { getPokemonAttribute, getPokemonTypes } from '../utils/pokemon'
import { PokemonType } from './PokemonType';

import './PokemonCard.scss';

interface PokemonCardProps {
  pokemon: any
}

const getPokemonImage = (pokemonId: string) => {
  return `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { id, name, height, weight } = pokemon;
  const types = getPokemonTypes(pokemon);
  const hp = getPokemonAttribute(pokemon, 'hp');

  console.log(pokemon, 'asf')

  return (
    <div className="pokemon-card">
      <header>
        <p className="pokemon-name">{name}</p>
        <FontAwesomeIcon icon={faHeart} className="pokemon-hp-icon" />
        <span className="pokemon-hp">{hp}HP</span>
        <ul className="pokemon-types">{types.map(type => <li ><PokemonType type={type} /></li>)}</ul>
        <div className="pokemon-label">Height: {height} Weight: {weight}</div>
      </header>
      <img className="pokemon-image" src={getPokemonImage(id)} alt={name} />
      <hr className="pokemon-separator" />

    </div>
  )
}

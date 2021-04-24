import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { getPokemonAttributes, getPokemonTypes } from '../utils/pokemon';
import { PokemonType } from './PokemonType';
import { PokemonImageSwitcher } from './PokemonImageSwitcher'; 

import './PokemonCard.scss';


interface PokemonCardProps {
  pokemon: any;
  children?: React.ReactNode
}

const mainAttributes = [{ name: 'hp', alias: 'HP'}];

export const PokemonCard = ({ pokemon, children }: PokemonCardProps) => {
  const { name, height, weight } = pokemon;
  const types = getPokemonTypes(pokemon);
  const hpAttribute = getPokemonAttributes(pokemon, mainAttributes);

  return (
    <div className="pokemon-card">
      <div className="pokemon-card-header">
        <div className="pokemon-card-info">
          <p className="pokemon-name">{name}</p>
          <FontAwesomeIcon icon={faHeart} className="pokemon-hp-icon" />
          <span className="pokemon-hp">{hpAttribute[0]?.value}HP</span>
          <ul className="pokemon-types reset-list">{types.map(type => <li ><PokemonType type={type} /></li>)}</ul>
        </div>
        <PokemonImageSwitcher pokemon={pokemon} />
      </div>
      <div className="pokemon-label">Height: {height} | Weight: {weight}</div>
      <hr className="pokemon-separator" />
      {children}
    </div>
  )
}

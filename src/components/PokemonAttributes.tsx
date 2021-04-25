import { getPokemonAttributes, getAttributeLevel, Attributes } from '../utils/pokemon';

import './PokemonAttributes.scss';


interface PokemonAttributesProps {
  pokemon: any;
  attributes: Attributes[]
}

export const PokemonAttributes = ({ pokemon, attributes = [] }: PokemonAttributesProps) => {
  const existAttributes = getPokemonAttributes(pokemon, attributes);

  return (
    <ul className="pokemons-attributes reset-list">
      {existAttributes.map(({ alias, value }, index) => (
        <li key={index} className="pokemons-attributes-item">
          <div className="pokemons-attributes-name">{alias}</div>
          <div className={`pokemons-attributes-value ${getAttributeLevel(value)}`}>{value}</div>
        </li>
      ))}
    </ul>
  )
}

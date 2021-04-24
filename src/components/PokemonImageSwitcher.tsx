import { useState } from 'react';
import { getOfficialImage, getDreamWorldImage } from '../utils/pokemon';

import './PokemonImageSwitcher.scss';

interface PokemonImageProps {
  pokemon: any;
}

export const PokemonImageSwitcher = ({ pokemon }: PokemonImageProps) => {
  const [ checked,  setChecked ] = useState(false);

  const officialImage = getOfficialImage(pokemon);
  const dreamWorldImage = getDreamWorldImage(pokemon);
  const isMultipleImages = !!officialImage && !!dreamWorldImage;

  const handleChecked = () => {
    setChecked(checked => !checked);
  }

  return (
    <div className="pokemon-image-switcher">
      {isMultipleImages && (
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" checked={checked} onChange={handleChecked} />
          <span className="checkbox-custom"></span>
        </label>
      )}
      <img className={`pokemon-image ${checked ? 'hidden' : ''}`} src={officialImage} alt={pokemon.name} />
      <img className={`pokemon-image ${checked ? '' : 'hidden'}`} src={dreamWorldImage} alt={pokemon.name} />
    </div>
  )
}

import pathUtil from 'path';

import './PokemonType.scss';

const typesIcons = require.context ('../icons/types-icons/', true, /\.svg$/)
const iconMapper = typesIcons
  .keys()
  .reduce((images, path) => {
    const id = pathUtil.basename(path, pathUtil.extname(path))

    images[id] = { path, file: typesIcons(path).default }
    return images;
  }, {});


interface PokemonTypeProps {
  type: string
}

export const PokemonType = ({ type }: PokemonTypeProps) => {
  const icon = iconMapper[type];

  return icon ? <span className={`type-icon ${type}`}><img src={icon.file} /></span> : null
}
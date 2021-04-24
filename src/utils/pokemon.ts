
export interface Attributes {
  name: string;
  alias?: string
}

export const getPokemonAttributes = (pokemon: any, attributes: Attributes[] = []) => {
  if (!pokemon) return;

  const attributesNames = attributes.map(attribute => attribute.name);
  const statAttributes = pokemon.stats.filter(statItem => attributesNames.includes(statItem.stat.name));

  return statAttributes.map(statItem => {
    const { name } = statItem.stat;
    const attribute = attributes.find(attribute => attribute.name === name);

    return { name, value: statItem.base_stat, ...(attribute && { alias: attribute.alias }) };
  })
}

export const getPokemonTypes = (pokemon: any) => {
  if (!pokemon) return;

  return pokemon.types.map(typeItem => typeItem.type.name);
}

export const getAttributeLevel = (value: number) => {
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

export const getPokemonImage = (pokemonId: string) => {
  return `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`;
}

export const getOfficialImage = (pokemon: any) => {
  if (!pokemon) return null;

  return pokemon.sprites?.other?.['official-artwork']?.front_default;
}

export const getDreamWorldImage = (pokemon: any) => {
  if (!pokemon) return null;

  return pokemon.sprites?.other?.dream_world?.front_default;
}
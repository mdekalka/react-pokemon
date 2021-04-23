export const getPokemonAttribute = (pokemon: any, attribute: string) => {
  if (!pokemon) return;

  const statAttribute = pokemon.stats.find((statItem: any) => statItem.stat.name === attribute);

  return statAttribute ? statAttribute.base_stat : null;
}

export const getPokemonTypes = (pokemon: any) => {
  if (!pokemon) return;

  return pokemon.types.map((typeItem: any) => typeItem.type.name);
}

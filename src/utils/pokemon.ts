
interface AttributeInput {
  name: string;
  alias?: string
}
interface AttrinuteOutput extends AttributeInput {
  value: number;
}

export const getPokemonAttributes = (pokemon: any, attributes: AttributeInput[] = []) => {
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

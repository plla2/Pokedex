export const getTypeIconSrc = (type) =>
  `/src/assets/images/types-icons/${type}.svg`;

export const formatPokemonData = (pokemon) => {
  const { id, name, sprites, weight, height, types } = pokemon;

  const weightInKg = weight / 10 + "kg";
  const heightInMeter = height / 10 + "m";
  const paddedId = String(id).padStart(3, "0");
  const formattedTypes = types.map(({ type }) => type);
  const pokemonImg =
    sprites.other.dream_world.front_default ||
    sprites.other["official-artwork"].front_default;

  return {
    ...pokemon,
    paddedId,
    weight: weightInKg,
    height: heightInMeter,
    imgSrc: pokemonImg,
    types: formattedTypes,
    name: name,
  };
};

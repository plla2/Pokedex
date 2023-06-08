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

export const normalizeEvolutionChain = (evolutionChain) => {
  const { species, evolves_to } = evolutionChain;

  if (!evolves_to.length) {
    return [];
  }
  const evolutions = evolves_to.reduce((chain, evolution) => {
    return [
      ...chain,
      {
        current: {
          name: species.name,
          image: getPokemonImg(species.url),
        },
        next: {
          name: evolution.species.name,
          image: getPokemonImg(evolution.species.url),
        },
      },
      ...normalizeEvolutionChain(evolution),
    ];
  }, []);
  return evolutions;
};

const getPokemonImg = (url) => {
  const id = url.match(/\/(\d+)\//)[1];
  const isPokemonHasSvg = id < 650;

  const base = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other`;

  if (isPokemonHasSvg) {
    return `${base}/dream-world/${id}.svg`;
  }
  return `${base}/official-artwork/${id}.png`;
};

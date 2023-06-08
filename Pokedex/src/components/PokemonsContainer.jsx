import usePokemons from "../hooks/usePokemons";
import PokemonCard from "./PokemonCard";

// eslint-disable-next-line react/prop-types
function PokemonsContainer({ type }) {
  const pokemons = usePokemons(type);
  return (
    <div className="pokemons-container">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonsContainer;

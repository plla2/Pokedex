import { usePokemonModal } from "../../context/PokemonModalProvider";

const IntroModal = () => {
  const { currentPokemon, closeModal } = usePokemonModal();
  console.log(currentPokemon);
  return (
    <div className="pokemon-intro">
      <a className="arrow-back" onClick={closeModal}></a>
      <div className="current-pokemon">
        <img src={currentPokemon.imgSrc} alt="Pokemon-Image" />
      </div>
    </div>
  );
};

export default IntroModal;

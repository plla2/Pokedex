import { createContext, useContext, useState } from "react";

export const PokemonModalContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const usePokemonModal = () => {
  return useContext(PokemonModalContext);
};

const PokemonModalProvider = ({ children }) => {
  const [modal, setModal] = useState({ isOpen: false, pokemon: null });

  const value = {
    currentPokemon: modal.pokemon,
    openModal: (pokemon) => setModal({ isOpen: true, pokemon }),
    isModalOpen: modal.isOpen,
    closeModal: () => setModal((prev) => ({ ...prev, isOpen: false })),
  };
  console.log(value.currentPokemon);
  return (
    <PokemonModalContext.Provider value={value}>
      {children}
    </PokemonModalContext.Provider>
  );
};
export default PokemonModalProvider;

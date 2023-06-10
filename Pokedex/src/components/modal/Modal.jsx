import { usePokemonModal } from "../../context/PokemonModalProvider";
import * as Dialog from "@radix-ui/react-dialog";
import IntroModal from "./IntroModal";

const Modal = () => {
  const { isModalOpen, closeModal, currentPokemon } = usePokemonModal();
  return (
    <Dialog.Root
      open={isModalOpen}
      onOpenChange={(isOpen) => !isOpen && closeModal()}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="overlay" />
        <Dialog.Content
          className={`modal ${currentPokemon?.types[0]?.name}`}
          data-content={currentPokemon?.name}
        >
          <IntroModal />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;

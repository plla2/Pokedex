import { useState } from "react";
import "./App.scss";
import PokemonsContainer from "./components/PokemonsContainer";
import TypesBar from "./components/TypesBar";
import PokemonModalProvider from "./context/PokemonModalProvider";

function App() {
  const [type, setType] = useState("ice");
  return (
    <>
      <PokemonModalProvider>
        <div className="wrapper">
          <h1 className="logo-pokemon">포켓몬 도감</h1>
          <TypesBar setType={setType} />
          <PokemonsContainer type={type} />
        </div>
      </PokemonModalProvider>
    </>
  );
}

export default App;

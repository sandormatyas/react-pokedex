import React, { useState, createContext } from "react";
import Pokedex from "./style/themes/Pokedex";
import Bluebase from "./style/themes/Bluebase";

export const AppContext = createContext();

export const AppContextProvider = props => {
  const [theme, setTheme] = useState(Pokedex);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);

  const toggleTheme = () => {
    setTheme(theme === Pokedex ? Bluebase : Pokedex);
  };

  const getPokemonDetails = id => {
    const pokemon = pokemonList.filter(pokemon => pokemon.id === parseInt(id));
    if (pokemon.length > 0) {
      return pokemon[0];
    } else {
      return null;
    }
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        pokemonList,
        pokemonTypes,
        setPokemonList,
        setPokemonTypes,
        getPokemonDetails
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

import React, { useState, useEffect, useCallback, createContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import { ThemeProvider } from "styled-components";

import "./App.css";
import PokemonList from "./components/PokemonElements/PokemonList";
import PokemonDetail from "./components/PokemonElements/PokemonDetail";
import TypeList from "./components/TypeList";
import Header from "./components/UserInterface/Header";
import Pokedex from "./style/themes/Pokedex";
import Bluebase from "./style/themes/Bluebase";

export const Context = createContext();
const App = props => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [theme, setTheme] = useState(Pokedex);

  const getData = useCallback(() => {
    const addPokemonToPokemonList = pokemon => {
      setPokemonList(prevElements => [...prevElements, pokemon.data]);
    };

    // Get the first 20 pokemon
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then(pokemonList =>
        pokemonList.data.results.map(singlePokemon =>
          axios
            .get(singlePokemon.url)
            .then(pokemon => addPokemonToPokemonList(pokemon))
        )
      );

    // I add Vaporeon separately because my girlfriend insisted on doing so
    axios
      .get("https://pokeapi.co/api/v2/pokemon/134/")
      .then(pokemon => addPokemonToPokemonList(pokemon));

    // Get Pokemon types
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then(types =>
        types.data.results.map(type =>
          axios
            .get(type.url)
            .then(typeDetails =>
              setPokemonTypes(prevElements => [
                ...prevElements,
                typeDetails.data
              ])
            )
        )
      );
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = () => {
    if (theme === Pokedex) {
      setTheme(Bluebase);
    } else {
      setTheme(Pokedex);
    }
  };

  const getPokemonDetails = id => {
    const pokemon = pokemonList.filter(pokemon => pokemon.id === parseInt(id));
    return pokemon;
  };

  const content = (
    <Context.Provider value={toggleTheme}>
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Header />
            <Route
              exact
              path="/"
              render={props => <PokemonList pokemonList={pokemonList} />}
            />
            <Route
              exact
              path="/pokemon/:id"
              render={props => (
                <PokemonDetail
                  pokemon={getPokemonDetails(props.match.params.id)}
                />
              )}
            />
            <Route
              path="/types"
              render={props => <TypeList types={pokemonTypes} />}
            />
          </div>
        </Router>
      </ThemeProvider>
    </Context.Provider>
  );
  return content;
};

export default App;

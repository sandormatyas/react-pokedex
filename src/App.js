import React, { useEffect, useCallback, useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import { ThemeProvider } from "styled-components";

import PokemonList from "./components/PokemonElements/PokemonList";
import PokemonDetail from "./components/PokemonElements/PokemonDetail";
import TypeList from "./components/TypeList";
import Header from "./components/UserInterface/Header";
import { AppContext } from "./AppContext";
import "./App.css";

const App = props => {
  const { setPokemonList } = useContext(AppContext);
  const { setPokemonTypes } = useContext(AppContext);

  const { theme } = useContext(AppContext);

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

    //This one is for me
    axios
      .get("https://pokeapi.co/api/v2/pokemon/443/")
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
  }, [setPokemonList, setPokemonTypes]);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const content = (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={PokemonList} />
          <Route exact path="/pokemon/:id" component={PokemonDetail} />
          <Route path="/types" component={TypeList} />
        </div>
      </Router>
    </ThemeProvider>
  );
  return content;
};

export default App;

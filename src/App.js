import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import PokemonList from "./components/PokemonElements/PokemonList";
import PokemonDetail from "./components/PokemonElements/PokemonDetail";
import TypeList from "./components/TypeList";
import Header from "./components/UserInterface/Header";

export class App extends Component {
  state = {
    pokemonList: [],
    types: []
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    // Get the first 20 pokemon
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then(pokemonList =>
        pokemonList.data.results.map(singlePokemon =>
          axios
            .get(singlePokemon.url)
            .then(pokemon => this.addPokemonToPokemonList(pokemon))
        )
      );

    // I add Vaporeon separately because my girlfriend insisted on doing so
    axios
      .get("https://pokeapi.co/api/v2/pokemon/134/")
      .then(pokemon => this.addPokemonToPokemonList(pokemon));

    // Get Pokemon types
    axios.get("https://pokeapi.co/api/v2/type").then(types =>
      types.data.results.map(type =>
        axios.get(type.url).then(typeDetails =>
          this.setState(currentState => ({
            types: [...currentState.types, typeDetails.data]
          }))
        )
      )
    );
  }

  addPokemonToPokemonList(pokemon) {
    return this.setState(currentState => ({
      pokemonList: [...currentState.pokemonList, pokemon.data]
    }));
  }

  getPokemonDetails(id) {
    const pokemon = this.state.pokemonList.filter(
      pokemon => pokemon.id === parseInt(id)
    );
    return pokemon;
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <PokemonList pokemonList={this.state.pokemonList} />
            )}
          />
          {/* <PokemonList pokemonList={this.state.pokemonList} /> */}
          <Route
            exact
            path="/pokemon/:id"
            render={props => (
              <PokemonDetail
                pokemon={this.getPokemonDetails(props.match.params.id)}
              />
            )}
          />
          <Route
            path="/types"
            render={props => <TypeList types={this.state.types} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;

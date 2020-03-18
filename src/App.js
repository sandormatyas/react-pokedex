import React, { Component } from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";
import axios from "axios";

export class App extends Component {
  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(pokemonList =>
      pokemonList.data.results.map(singlePokemon =>
        axios.get(singlePokemon.url).then(pokemonDetails =>
          this.setState(currentState => ({
            pokemonList: [...currentState.pokemonList, pokemonDetails.data]
          }))
        )
      )
    );
  }

  state = {
    pokemonList: []
  };

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <PokemonList pokemonList={this.state.pokemonList} />
      </div>
    );
  }
}

export default App;

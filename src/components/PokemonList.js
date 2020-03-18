import React, { Component } from "react";
import PokemonCard from "./PokemonCard";
import PropTypes from "prop-types";

export class PokemonList extends Component {
  render() {
    return this.props.pokemonList.map(pokemon => (
      <PokemonCard key={pokemon.id} pokemon={pokemon} />
    ));
  }
}

PokemonList.propTypes = {
  pokemon: PropTypes.array.isRequired
};

export default PokemonList;

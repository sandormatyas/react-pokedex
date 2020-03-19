import React, { Component } from "react";
import PokemonCard from "./PokemonCard";
import PropTypes from "prop-types";

export class PokemonList extends Component {
  render() {
    return (
      <div className="container" id="pokemonList">
        {this.props.pokemonList.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    );
  }
}

PokemonList.propTypes = {
  pokemonList: PropTypes.array.isRequired
};

export default PokemonList;

import React from "react";
import PokemonCard from "./PokemonCard";
import PropTypes from "prop-types";

const PokemonList = props => {
  return (
    <div className="container" id="pokemonList">
      {props.pokemonList.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

PokemonList.propTypes = {
  pokemonList: PropTypes.array.isRequired
};

export default PokemonList;

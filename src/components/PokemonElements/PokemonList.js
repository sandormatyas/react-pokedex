import React from "react";
import PokemonCard from "./PokemonCard";
import PropTypes from "prop-types";
import Container from "../../style/Container";

const PokemonList = props => {
  return (
    <Container id="pokemonList">
      {props.pokemonList.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </Container>
  );
};

PokemonList.propTypes = {
  pokemonList: PropTypes.array.isRequired
};

export default PokemonList;

import React, { useContext } from "react";
import PokemonCard from "./PokemonCard";
import Container from "../../style/Container";
import { AppContext } from "../../AppContext";

const PokemonList = props => {
  const { pokemonList } = useContext(AppContext);

  return (
    <Container id="pokemonList">
      {pokemonList.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </Container>
  );
};

export default PokemonList;

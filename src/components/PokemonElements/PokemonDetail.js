import React from "react";
import Container from "../../style/Container";

const PokemonDetail = props => {
  const pokemon = props.pokemon[0];
  let content;
  if (pokemon === undefined) {
    content = null;
  } else {
    content = (
      <Container id="pokemonDetails">
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Abilities:</p>
          <ul>
            {pokemon.abilities.map(ability => (
              <li key={ability.slot}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      </Container>
    );
  }
  return content;
};

export default PokemonDetail;

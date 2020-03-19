import React, { Component } from "react";

export class PokemonDetail extends Component {
  render() {
    const pokemon = this.props.pokemon[0];
    if (pokemon === undefined) {
      return null;
    } else {
      return (
        <div className="container" id="pokemonDetails">
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
      );
    }
  }
}

export default PokemonDetail;

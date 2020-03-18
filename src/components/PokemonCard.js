import React, { Component } from "react";
import PropTypes from "prop-types";

export class PokemonCard extends Component {
  render() {
    return <div className="poke-card">{this.props.pokemon.name}</div>;
  }
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default PokemonCard;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

export class PokemonCard extends Component {
  state = {
    redirect: null
  };

  setRedirect = () => {
    this.setState({ redirect: `/pokemon/${this.props.pokemon.id}` });
  };

  render() {
    const pokemon = this.props.pokemon;
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    } else {
      return (
        <div className="poke-card" onClick={this.setRedirect}>
          <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
          <p>{pokemon.name}</p>
        </div>
      );
    }
  }
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default PokemonCard;

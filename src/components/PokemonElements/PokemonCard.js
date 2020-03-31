import React, { useState } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

const PokemonCard = props => {
  const pokemon = props.pokemon;
  const [redirect, setRedirect] = useState(null);

  const redirectToPokemon = () => {
    setRedirect(`/pokemon/${pokemon.id}`);
  };

  let content;

  if (redirect !== null) {
    content = <Redirect to={redirect} />;
  } else {
    content = (
      <div className="poke-card" onClick={redirectToPokemon}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
        <p>{pokemon.name}</p>
      </div>
    );
  }
  return content;
};

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default PokemonCard;

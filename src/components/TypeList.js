import React, { useContext } from "react";
import Container from "../style/Container";
import { AppContext } from "../AppContext";

const TypeList = props => {
  const { pokemonTypes } = useContext(AppContext);

  return (
    <Container id="typeContainer">
      <ul>
        {pokemonTypes.map(type => (
          <li key={type.id}>{type.name}</li>
        ))}
      </ul>
    </Container>
  );
};

export default TypeList;

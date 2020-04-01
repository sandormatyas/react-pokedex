import React from "react";
import Container from "../style/Container";

const TypeList = props => {
  return (
    <Container id="typeContainer">
      <ul>
        {props.types.map(type => (
          <li key={type.id}>{type.name}</li>
        ))}
      </ul>
    </Container>
  );
};

export default TypeList;

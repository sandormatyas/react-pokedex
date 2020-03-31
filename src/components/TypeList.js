import React from "react";

const TypeList = props => {
  return (
    <div className="container" id="typeContainer">
      <ul>
        {props.types.map(type => (
          <li key={type.id}>{type.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TypeList;

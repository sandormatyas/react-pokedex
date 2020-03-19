import React, { Component } from "react";

export class TypeList extends Component {
  render() {
    console.log(this.props.types);
    return (
      <div className="container" id="typeContainer">
        <ul>
          {this.props.types.map(type => (
            <li key={type.id}>{type.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TypeList;

import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div id="header">
        <h1>
          <Link to="/">Reactomon</Link>
        </h1>
        <Link to="/">Pokemon</Link> | <Link to="/types">Types</Link>
      </div>
    );
  }
}

export default Header;

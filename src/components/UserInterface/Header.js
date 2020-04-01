import React from "react";
import { Link } from "react-router-dom";
import HeaderContainer from "../../style/HeaderContainer";

const Header = props => {
  return (
    <HeaderContainer id="header">
      <h1>
        <Link to="/">Reactomon</Link>
      </h1>
      <Link to="/">Pokemon</Link> | <Link to="/types">Types</Link> |{" "}
      <span onClick={props.toggleTheme}>Toggle theme</span>
    </HeaderContainer>
  );
};

export default Header;

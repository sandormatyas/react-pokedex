import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HeaderContainer from "../../style/HeaderContainer";
import { AppContext } from "../../AppContext";

const Header = props => {
  const { toggleTheme } = useContext(AppContext);
  return (
    <HeaderContainer id="header">
      <h1>
        <Link to="/">Reactomon</Link>
      </h1>
      <Link to="/">Pokemon</Link> | <Link to="/types">Types</Link> |{" "}
      <span onClick={toggleTheme}>Toggle theme</span>
    </HeaderContainer>
  );
};

export default Header;

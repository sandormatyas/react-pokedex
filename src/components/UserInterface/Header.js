import React from "react";
import { Link } from "react-router-dom";
import HeaderContainer from "../../style/HeaderContainer";
import ThemeToggler from "./ThemeToggler";

const Header = props => {
  return (
    <HeaderContainer>
      <div className="title">
        <Link id="page-title" to="/">
          Reactomon
        </Link>
        <ThemeToggler />
      </div>
      <div className="nav">
        <Link to="/">Pokemon</Link>
        <Link to="/types">Types</Link>
      </div>
    </HeaderContainer>
  );
};

export default Header;

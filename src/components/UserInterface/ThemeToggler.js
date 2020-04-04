import React, { useContext, useState } from "react";
import Toggler from "../../style/Toggler";
import { AppContext } from "../../AppContext";

const ThemeToggler = () => {
  const { toggleTheme } = useContext(AppContext);
  const [checked, setChecked] = useState(false);

  const toggle = event => {
    toggleTheme();
    setChecked(!checked);
  };

  return (
    <Toggler className="switch">
      <input type="checkbox" checked={checked} onChange={toggle}></input>
      <span className="slider round"></span>
    </Toggler>
  );
};

export default ThemeToggler;

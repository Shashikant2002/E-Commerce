import React from "react";
import "./colorBtn.css";
import {
  NavLink
} from "react-router-dom";

const ColorBtn = (prop) => {
  return (
    <>
      <NavLink onClick={() => prop.closeMenu()} className="colorBtn navLink" to={prop.path}>
        {prop.name}
      </NavLink>
    </>
  );
};

export default ColorBtn;

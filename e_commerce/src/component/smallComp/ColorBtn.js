import React from "react";
import "./colorBtn.css";
import {
  NavLink
} from "react-router-dom";

const ColorBtn = (prop) => {
  const closeMenu = () => {
    console.log("hell")
    const burger = document.getElementById("burger");
    burger.classList.remove("close");

    const navbar = document.querySelector(".navbar");
    navbar.classList.remove("mainHeaderActive");
  };
  return (
    <>
      <NavLink onClick={() => closeMenu()} className="colorBtn navLink" to={prop.path}>
        {prop.name}
      </NavLink>
    </>
  );
};

export default ColorBtn;

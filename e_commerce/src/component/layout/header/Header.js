import React from "react";
import { NavLink } from "react-router-dom";
import ColorBtn from "../../smallComp/ColorBtn";
import "./header.css";
import { ImSearch } from 'react-icons/im';
import { BsCartCheck } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';

const Header = () => {
  const close = () => {
    const burger = document.getElementById("burger");
    burger.classList.toggle("close");

    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("mainHeaderActive");
  };

  const closeMenu = () => {
    console.log("hell")
    const burger = document.getElementById("burger");
    burger.classList.remove("close");

    const navbar = document.querySelector(".navbar");
    navbar.classList.remove("mainHeaderActive");
  };

  return (
    <div className="header">
      <div className="container">
        <div onClick={() => close()} id="burger" className="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="navbar">
        <div className="logo">
          <img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt="" />
        </div>
        <div className="link1">
          <ColorBtn closeMenu = {closeMenu} name="Home" path="/" />
          <ColorBtn closeMenu = {closeMenu} name="Products" path="/product" />
        </div>
        <div className="link2">
          <ColorBtn closeMenu = {closeMenu} name="Services" path="/services" />
          <ColorBtn closeMenu = {closeMenu} name="About Us" path="/about" />
        </div>
        <div className="link3">
          <NavLink onClick={closeMenu} to='/search'><ImSearch /></NavLink>
          <NavLink onClick={closeMenu} to='/'><BsCartCheck /></NavLink>
          <NavLink onClick={closeMenu} to='/'><CgProfile /></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import ColorBtn from "../../smallComp/ColorBtn";
import "./header.css";

const Header = () => {
  const close = () => {
    const burger = document.getElementById("burger");
    burger.classList.toggle("close");

    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("mainHeaderActive");
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
          <ColorBtn name="Home" path="/" />
          <ColorBtn name="About" path="/about" />
        </div>
        <div className="link2">
          <ColorBtn name="Services" path="/services" />
          <ColorBtn name="About Us" path="/about" />
        </div>
        <div className="link3">fsdf</div>
      </div>
    </div>
  );
};

export default Header;

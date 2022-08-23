import React from "react";
import "./colorBtn.css";
import {
  Link
} from "react-router-dom";

const ColorBtn = (prop) => {
  return (
    <>
      <Link className="colorBtn" to={prop.path}>
        {prop.name}
      </Link>
    </>
  );
};

export default ColorBtn;

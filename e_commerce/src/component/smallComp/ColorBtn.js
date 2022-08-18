import React from "react";
import "./colorBtn.css";

const ColorBtn = (prop) => {
  return (
    <>
      <a className="colorBtn" href={prop.path}>
        {prop.name}
      </a>
    </>
  );
};

export default ColorBtn;

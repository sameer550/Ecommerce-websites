import "./style.css";
import React from "react";
const Tiles = ({ imgSrc, label }) => {
  return (
    <div className="container">
      <div className="main-container">
        <img src={imgSrc} className="img1" alt="logo" />
        <label className="labelButton">{label}</label>
      </div>
    </div>
  );
};
export default Tiles;

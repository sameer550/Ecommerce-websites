import React from "react";
import "./style.css";
const Filter = ({ name }) => {
  return (
    <div>
      <input type="checkbox"></input>
      <span className="label"> {name}</span>
    </div>
  );
};

export default Filter;

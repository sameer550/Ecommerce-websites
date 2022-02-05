import React from "react";
import "./style.css";
const Button = ({ text, buttonColor, onclick }) => {
  return (
    <div>
      <button className={`btn ${buttonColor}`} onClick={onclick}>
        {text}
      </button>
    </div>
  );
};
export default Button;

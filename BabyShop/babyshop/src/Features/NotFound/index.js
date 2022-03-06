import React from "react";
import "./style.css";
import NotFoundimg from "../../assets/img/pagenotfound.png";

const NotFound = () => {
  return (
    <div>
      <img className="notFound" src={NotFoundimg} alt="PageNotFound"></img>
    </div>
  );
};

export default NotFound;

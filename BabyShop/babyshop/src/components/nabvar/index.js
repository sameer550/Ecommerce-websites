import React from "react";
import { Link } from "react-router-dom";
import Button from "../button";
import "./style.css";
import Logo from "../../assets/img/logo.png";
import LoginImg from "../../assets/img/login.png";
const Nav = () => {
  const logoutButton = () => {
    localStorage.removeItem("loginUser");
    window.location.reload();
  };

  return (
    <div className="container-nav">
      <nav className="navbar navbar-expand-lg navbar-light bg-blue">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="img-logo" src={Logo} alt="logo" />
            BachaParty
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              //me-auto
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {localStorage.getItem("loginUser") == null ? (
                  <>
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </>
                ) : (
                  <></>
                )}
              </li>
              {localStorage.getItem("loginUser") == null && (
                <li className="nav-item">
                  <Link className="nav-link" to={"/signup"}>
                    Signup
                  </Link>
                </li>
              )}
            </ul>
            <form className="d-flex search-bar">
              <input
                className="form-control me-0"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Button text={"Search"} buttonColor={"primaryColor"} />
            </form>
          </div>
          {localStorage.getItem("loginUser") !== null ? (
            <>
              <div className="dropdown">
                <div className="dropbtn">
                  <Button
                    text={JSON.parse(localStorage.getItem("loginUser")).name}
                    buttonColor={"primaryColor"}
                  />
                </div>
                <div className="dropdown-content">
                  <a className="btnLogout" onClick={logoutButton}>
                    Logout
                  </a>
                  {/* <a href="#">Link 2</a>
                  <a href="#">Link 3</a> */}
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </nav>
    </div>
  );
};
export default Nav;

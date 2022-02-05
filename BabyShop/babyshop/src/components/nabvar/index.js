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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                  <>
                    <Button
                      buttonColor="whiteColor"
                      text="Logout"
                      onclick={logoutButton}
                    />
                  </>
                )}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/signup"}>
                  Signup
                </Link>
              </li>
            </ul>
            <form className="d-flex ">
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
              <div className="navbar-brand login-details" href="#">
                <img className="img-logo login-img" src={LoginImg} alt="logo" />
                <a className="login-name">
                  {JSON.parse(localStorage.getItem("loginUser")).name}
                </a>
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

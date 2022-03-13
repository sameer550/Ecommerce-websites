import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../button";
import "./style.css";
import Logo from "../../assets/img/logo.png";
import LoginImg from "../../assets/img/login.png";
import { useSelector } from "react-redux";
const Nav = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userDetailsReducer);
  const logoutButton = () => {
    localStorage.removeItem("persist:user");
    navigate("/");
  };

  return (
    <div className="container-nav">
      <nav className="navbar navbar-expand-lg navbar-light bg-blue">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="img-logo" src={Logo} alt="logo" />
            Baby Shop
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/clothes"
                >
                  Clothes
                </Link>
              </li>
              <li className="nav-item">
                {user.name === "" ? (
                  <>
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </>
                ) : (
                  <></>
                )}
              </li>
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
          {user.name !== "" ? (
            <>
              {/* <div className="dropdown">
                <div className="dropbtn">
                  <Button text={data.name} buttonColor={"primaryColor"} />
                </div>
                <div className="dropdown-content">
                  <a className="btnLogout" onClick={logoutButton}>
                    Logout
                  </a>
                </div>
              </div> */}

              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  buttonColor={"primaryColor"}
                >
                  {user.name}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <div className="dropdown-content">
                      <a className="btnLogout" onClick={logoutButton}>
                        Logout
                      </a>
                    </div>
                  </li>
                </ul>
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

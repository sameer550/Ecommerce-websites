import "./style.css";
import React from "react";
import { useState } from "react";
import Nav from "../../components/nabvar";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Foot from "../../components/footer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userDetails1 } from "../../Redux/Actions/userDetails.action";
const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState({});
  const saveUserDetails = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email address is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    return errors;
  };
  const buttonClick = () => {
    setFormErrors(validate(userDetails));
    let email = userDetails.email;
    let password = userDetails.password;
    if (email === "" || password === "") {
    } else {
      axios
        .post(`http://localhost:4000/api/v1/auth/login`, userDetails)
        .then((response) => {
          console.log("response", response);
          const {
            data: { firstName, email, _id },
          } = response.data;
          const detailsUser = {
            name: firstName,
            email,
            id: _id,
          };
          dispatch(userDetails1(detailsUser));
          navigate("/");
        })
        .catch((err) => {
          const {
            status,
            data: { message },
          } = err.response;
          if (status === 404) {
            setErrorMessage(message);
          }
        });
    }
  };

  return (
    <>
      <Nav />
      <div className="container mt-4">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <div className="card px-4 py-4">
              <div className="form-data">
                <div className="forms-inputs mb-3">
                  <h4>Login</h4>
                  <input
                    type="text"
                    placeholder="Email"
                    id="email"
                    name="email"
                    onChange={saveUserDetails}
                  />
                  <p className="error-message">{formErrors.email}</p>
                </div>

                <div className="forms-inputs mb-4">
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    onChange={saveUserDetails}
                  />
                  <p className="error-message">{formErrors.password}</p>
                </div>

                <div className="mb-3">
                  <Button
                    text={"Login"}
                    buttonColor={"primaryColor"}
                    onclick={buttonClick}
                  />
                </div>
                <div className="btnSign">
                  <p className="error-message  ">{errorMessage}</p>
                </div>
                <div className="btnSign">
                  <Link className="btnSignup" to="/signup">
                    Create an account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
};
export default Login;

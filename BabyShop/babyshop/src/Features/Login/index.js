import "./style.css";
import React from "react";
import { useState, useEffect } from "react";
import Nav from "../../components/nabvar";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Foot from "../../components/footer";
const Login = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    userEmail: "",
    userpassword: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const saveUserDetails = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!values.userEmail) {
      errors.userEmail = "Email address is required!";
    } else if (!values.userEmail.match(regex)) {
      errors.userEmail = "Email address is not valid!";
    }
    if (!values.userpassword) {
      errors.userpassword = "Password is required!";
    } else if (values.userpassword.length < 4) {
      errors.userpassword = "Password must be more 4 characters";
    } else if (values.userpassword.length > 10) {
      errors.userpassword = "Password cannot be exceed more than 10 characters";
    }
    return errors;
  };
  const buttonClick = () => {
    setFormErrors(validate(userDetails));
    let email = userDetails.userEmail;
    let password = userDetails.userpassword;
    const obj = JSON.parse(localStorage.getItem("dataUser"));
    obj.map(({ userEmail, userpassword, firstName, lastName }) => {
      if (email === userEmail) {
        if (password === userpassword) {
          localStorage.setItem(
            "loginUser",
            JSON.stringify({ email, name: firstName + " " + lastName })
          );
          navigate("/");
        } else {
          alert("Password is incorrect");
        }
      } else {
        alert("Email is incorrect");
      }
    });
  };
  useEffect(() => {
    if (localStorage.getItem("loginUser") !== null) {
      console.log("Log In");
      navigate("/");
    }
  }, []);

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
                    name="userEmail"
                    onChange={saveUserDetails}
                  />
                  <p className="error-message">{formErrors.userEmail}</p>
                </div>

                <div className="forms-inputs mb-4">
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="userpassword"
                    onChange={saveUserDetails}
                  />
                  <p className="error-message">{formErrors.userpassword}</p>
                </div>

                <div className="mb-3">
                  <Button
                    text={"Login"}
                    buttonColor={"primaryColor"}
                    onclick={buttonClick}
                  />
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

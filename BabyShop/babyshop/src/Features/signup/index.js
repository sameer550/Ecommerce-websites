import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import Button from "../../components/button";
import Nav from "../../components/nabvar";
import Foot from "../../components/footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const [createUser, setCreateUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const saveCreateuser = (e) => {
    const { name, value } = e.target;
    setCreateUser((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!values.email) {
      errors.email = "Email address is required!";
    } else if (!values.email.match(regex)) {
      errors.email = "Email address is not valid!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot be exceed more than 10 characters";
    }
    if (!values.firstName) {
      errors.firstName = "This must been filled";
    }
    if (!values.lastName) {
      errors.lastName = "This must been filled";
    }
    return errors;
  };

  const buttonClick = () => {
    setFormErrors(validate(createUser));
    console.log("user", createUser);
    // fetch("http://localhost:4000/api/v1/users", {
    //   method: "POST",
    //   body: JSON.stringify(createUser),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })

    axios
      .post("http://localhost:4000/api/v1/auth/signup", createUser)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("loginUser") !== null) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Nav />
      <div className="container mt-4">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <div className="card1 px-4 py-4">
              <div className="form-data">
                <div className="forms-inputs mb-3">
                  <h4>Signup</h4>
                  <input
                    type="text"
                    placeholder="First Name"
                    id="fname"
                    name="firstName"
                    onChange={saveCreateuser}
                  />
                  <p className="error-message">{formErrors.firstName}</p>
                </div>
                <div className="forms-inputs mb-3">
                  <input
                    type="text"
                    placeholder="Last Name"
                    id="lname"
                    name="lastName"
                    onChange={saveCreateuser}
                  />
                  <p className="error-message">{formErrors.lastName}</p>
                </div>
                <div className="forms-inputs mb-3">
                  <input
                    type="text"
                    placeholder="Enter email"
                    id="signupEmail"
                    name="email"
                    onChange={saveCreateuser}
                  />
                  <p className="error-message">{formErrors.email}</p>
                </div>
                <div className="forms-inputs mb-4">
                  <input
                    type="password"
                    placeholder="Password"
                    id="signupPassword"
                    name="password"
                    onChange={saveCreateuser}
                  />
                  <p className="error-message">{formErrors.password}</p>
                </div>

                <div className="mb-3">
                  <Button
                    text={"Create an account"}
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
export default Signup;

import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import Button from "../../components/button";
import Nav from "../../components/nabvar";
import Foot from "../../components/footer";
const Signup = () => {
  const [createUser, setCreateUser] = useState({
    firstName: "",
    lastName: "",
    userEmail: "",
    userpassword: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  //const [paravalues, setParavalues] = useState("");
  const saveCreateuser = (e) => {
    const { name, value } = e.target;
    setCreateUser((prevValue) => {
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
    let formData = [];
    if (Object.keys(validate(createUser)).length === 0) {
      formData = JSON.parse(localStorage.getItem("dataUser"));
      console.log("form data", formData);
      if (formData == null) {
        formData = [];
      }
      formData.push(createUser);
      localStorage.setItem("dataUser", JSON.stringify(formData));
    }
    // setIsSubmit(true);
    // alert("hello");
  };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     localStorage.setItem("userId", JSON.stringify(createUser));
  //     console.log(JSON.parse(localStorage.getItem("userId")));
  //   }
  // }, [formErrors]);

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
                    name="userEmail"
                    onChange={saveCreateuser}
                  />
                  <p className="error-message">{formErrors.userEmail}</p>
                </div>
                <div className="forms-inputs mb-4">
                  <input
                    type="password"
                    placeholder="Password"
                    id="signupPassword"
                    name="userpassword"
                    onChange={saveCreateuser}
                  />
                  <p className="error-message">{formErrors.userpassword}</p>
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

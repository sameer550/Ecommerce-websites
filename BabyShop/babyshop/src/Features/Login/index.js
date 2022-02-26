import "./style.css";
import React from "react";
import { useState, useEffect } from "react";
import Nav from "../../components/nabvar";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Foot from "../../components/footer";
import axios from "axios";

const Login = () => {
  const [resp, setResp] = useState(true);
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
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

    // const obj = JSON.parse(localStorage.getItem("dataUser"));
    console.log("userDetail", userDetails);
    if (email == "" || password == "") {
      alert("please filled fields");
    } else {
      localStorage.setItem("userLogin", { email });
      axios
        .setItem()
        .get(
          `http://localhost:4000/api/v1/users?email=${email}&&password=${password}`
        )
        .then((response) => {
          console.log("Response", response);
          navigate("/");
        })
        .catch((err, response) => {
          console.log("error", err);
          if (response.status(404)) {
            alert("Sorry email or id not found");
          }
        });
    }

    // fetch("http://localhost:4000/api/v1/users",{
    //   method:"GET",
    //   body:JSON.stringify(userDetails)
    // }).then((response)=>{
    //   console.log("reponse",response)
    // }
    // ).catch((err)=>{
    //       console.log("error",err)
    //   })
    //   obj.map(({ email, userpassword, firstName, lastName }) => {
    //     if (email === email) {
    //       if (password === userpassword) {
    //         localStorage.setItem(
    //           "loginUser",
    //           JSON.stringify({el, name: firstName + " " + lastName })
    //         );
    //         navigate("/");
    //         setIsLogin(true);
    //       } else {
    //         setIsLogin(false);
    //       }
    //     } else {
    //       setIsn(false);
    //     }
    //   });
    //   if (isLogin === false) {
    //     alert("Email or password nound");
    //   }
  };
  useEffect(() => {
    if (localStorage.getItem("loginUser") !== null) {
      console.log("Log In");
      navigate("/");
    }
  }, []);
  // useEffect((chk) => {
  //   if (chk) {
  //     alert("hellow");
  //   }
  // });
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

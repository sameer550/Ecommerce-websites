import "./style.css";
import React from "react";
import { useState, useEffect } from "react";
import Nav from "../../components/nabvar";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Foot from "../../components/footer";
import axios from "axios";

const Login = () => {
  const [resp, setResp] = useState();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    userEmail: "",
    userpassword: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isLogin, setIsLogin] = useState(true);
  const saveUserDetails = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };
  const validate = (values) => {
    const errors = {};
    if (!values.userEmail) {
      errors.userEmail = "Email address is required!";
    }
    if (!values.userpassword) {
      errors.userpassword = "Password is required!";
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
          setIsLogin(true);
        } else {
          setIsLogin(false);
        }
      } else {
        setIsLogin(false);
      }
    });
    if (isLogin === false) {
      alert("Email or password not found");
    }
  };

  const check = () => {
    axios
      .get(`http://localhost:4000/api/v1/users`)
      .then((response) => {
        console.log(response.data);
        setResp(response.data);
        // setChk(res.data);
        // console.log(chk);
        // setChk(res.data.name + " " + res.data.email);
        // console.log(chk);

        // const users = res.data;
        // const data = JSON.stringify(users);
        // data.map(({ email, password }) => {
        //   console.log("email =", email);
        //   console.log("password", password);
        // });
      })
      .catch((err) => {
        console.log(err);
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
                <div className="mb-3">
                  <Button
                    text={"API"}
                    buttonColor={"primaryColor"}
                    onclick={check}
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

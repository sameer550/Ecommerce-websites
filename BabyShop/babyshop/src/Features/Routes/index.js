import React from "react";
import Home from "../Home";
import NotFound from "../NotFound";
import {
  Route,
  Routes as Switch,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import { routeConfig } from "../Routes/routeConfig";
import { useSelector } from "react-redux";
import Login from "../Login";
import Signup from "../signup";
import Clothes from "../../components/Clothes";
const NewRouter = () => {
  const login = useSelector((state) => state.userDetailsReducer);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        {/* {login.name === "" ? ( */}
        {/* <> */}
        <Route
          path="login"
          element={login.name === "" ? <Login /> : <Navigate replace to="/" />}
        />
        <Route
          path="signup"
          element={login.name === "" ? <Signup /> : <Navigate replace to="/" />}
        />
        {/* </> */}
        {/* ) : (
          <Route exact path="/" element={<Home />} />
        )} */}

        <Route path="clothes" element={<Clothes />} />

        {/* {routeConfig.map(({ path, Component }, index) => {
          // if (login.name !== "") {
          console.log("login name");
          return <Route path={path} key={index} element={<Component />} />;
          // } else {
          //if (path == "login" || path == "signup") {
          // console.log("else condition");
          // return <Route path="/" element={<Navigate replace to="/" />} />;
          // }
          // }
          // return (
          //   <Route path={path} key={index} element={<Component />}></Route>
          // );
        })} */}
        {/* {} */}
      </Switch>
    </BrowserRouter>
  );
};

export default NewRouter;

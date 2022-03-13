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
const NewRouter = () => {
  const login = useSelector((state) => state.userDetailsReducer);
  console.log("login", login);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        {routeConfig.map(({ path, Component }, index) => {
          if (login.name !== "") {
            console.log("login name");
            return <Route path={path} key={index} element={<Component />} />;
          } else {
            //if (path == "login" || path == "signup") {
            return <Route path="/" element={<Navigate replace to="/" />} />;
            // }
          }
          // return (
          //   <Route path={path} key={index} element={<Component />}></Route>
          // );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default NewRouter;

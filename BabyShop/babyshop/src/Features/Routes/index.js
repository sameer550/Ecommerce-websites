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
const NewRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        {routeConfig.map(({ path, Component }, index) => {
          if (!localStorage.getItem("loginUser")) {
            return <Route path="/" element={<Navigate replace to="/" />} />;
          }
          return (
            <Route path={path} key={index} element={<Component />}></Route>
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default NewRouter;

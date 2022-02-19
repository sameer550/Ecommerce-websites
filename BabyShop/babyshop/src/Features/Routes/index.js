import React from "react";
import Home from "../Home";
import NotFound from "../NotFound";
import Login from "../Login";
import Signup from "../signup";
import { Route, Routes as Switch, BrowserRouter } from "react-router-dom";
const NewRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Switch>
    </BrowserRouter>
  );
};

export default NewRouter;

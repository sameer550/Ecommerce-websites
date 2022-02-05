import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Features/Home";
import Login from "./Features/Login";
import { Route, Routes, Routes as Switch } from "react-router-dom";
import Signup from "./Features/signup";
function App() {
  return (
    <Switch>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
    </Switch>
  );
}

export default App;

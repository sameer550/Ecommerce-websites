import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NewRouter from "./Features/Routes";
import { BrowserRouter } from "react-router-dom";
import Signup from "./Features/signup";
function App() {
  return <NewRouter />;
}

export default App;

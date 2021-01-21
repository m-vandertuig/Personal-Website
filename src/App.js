import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import showNavigationbar from "./editable-stuff/configurations.json";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";


const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
    <Route path="/" exact component={Home} />
  </BrowserRouter>
);

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles/sass/main.scss";
import Navbar from "./components/nav-bar/nav-bar";
import Home from "./components/home-page/home";
import Services from "./components/services-page/services";
import Login from "./components/login-page/login";
import Footer from "./components/footer/footer";

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route path="/services" component={Services} />
    <Route path="/login" component={Login} />
    <Footer />
  </BrowserRouter>,

  document.getElementById("root")
);

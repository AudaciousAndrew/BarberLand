import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import "./styles/sass/main.scss";
import Navbar from "./components/nav-bar/nav-bar";
import Home from "./components/home-page/home";
import Services from "./components/services-page/services";
import Login from "./components/login-page/login";
import Footer from "./components/footer/footer";
import Register from "./components/register-page/register";

const Main = withRouter(({ location }) => {
  return (
    <>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Footer />
      )}
    </>
  );
});

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);

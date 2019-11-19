import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import "./styles/sass/main.scss";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import SignPage from "./components/SignPage/SignPage.jsx";
import LoginForm from "./components/SignPage/LoginForm/LoginForm.jsx";
import RegisterForm from "./components/SignPage/RegisterForm/RegisterForm.jsx";
import ScrollToTopRoute from "./utilities/ScrollToTopRoute";

const App = withRouter(({ location }) => {
  return (
    <>
      <Navbar />
      <ScrollToTopRoute exact path="/" component={HomePage} />
      <ScrollToTopRoute path="/services" component={ServicesPage} />
      <Route
        path="/login"
        render={props => (
          <SignPage>
            <LoginForm />
          </SignPage>
        )}
      />
      <Route
        path="/register"
        render={props => (
          <SignPage>
            <RegisterForm />
          </SignPage>
        )}
      />
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Footer />
      )}
    </>
  );
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

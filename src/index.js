import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import "./styles/sass/main.scss";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import SignPage from "./components/SignPage/SignPage";
import LoginForm from "./components/SignPage/LoginForm/LoginForm";
import RegisterForm from "./components/SignPage/RegisterForm/RegisterForm";
import ScrollToTopRoute from "./utilities/ScrollToTopRoute";
import SingleService from "./components/SingleService/SingleService";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import AuthService from "./services/auth";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    const user = localStorage.getItem("user");

    if (user) {
      this.setState({
        authUser: JSON.parse(user)
      });
    }
  }

  setAuthUser = authUser => {
    this.setState({
      authUser
    });
  };

  render() {
    const { location } = this.props;
    return (
      <>
        <Navbar authUser={this.state.authUser} />
        <ScrollToTopRoute exact path="/" component={HomePage} />
        <ScrollToTopRoute path="/services" component={ServicesPage} />
        <ScrollToTopRoute path="/service" component={SingleService} />
        <ScrollToTopRoute path="/profile" component={ProfilePage} />
        <Route
          path="/login"
          render={props => (
            <SignPage>
              <LoginForm {...props} />
            </SignPage>
          )}
        />
        <Route
          path="/register"
          render={props => (
            <SignPage>
              <RegisterForm
                {...props}
                registerUser={this.props.authService.registerUser}
                setAuthUser={this.setAuthUser}
              />
            </SignPage>
          )}
        />
        {location.pathname !== "/login" &&
          location.pathname !== "/register" && <Footer />}
      </>
    );
  }
}

const Main = withRouter(props => {
  return <App authService={new AuthService()} {...props} />;
});

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);

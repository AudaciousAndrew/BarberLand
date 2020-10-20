//Defaults
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
//Styles
import "./styles/sass/main.scss";
//Components
import Navbar from "./components/layout/NavBar/NavBar";
import Footer from "./components/layout/Footer/Footer";
import HomePage from "./components/pages/HomePage/HomePage";
import ServicesPage from "./components/pages/ServicesPage/ServicesPage";
import SignPage from "./components/pages/SignPage/SignPage";
import LoginForm from "./components/pages/SignPage/LoginForm/LoginForm";
import RegisterForm from "./components/pages/SignPage/RegisterForm/RegisterForm";
import ScrollToTopRoute from "./utilities/ScrollToTopRoute";
import SingleServiceContainer from "./components/pages/ServicesPage/SingleService/SingleServiceContainer";
import ProfilePage from "./components/pages/ProfilePage/ProfilePage";
//Protected Routes
import NotAuthRedirect from "./components/utils/NotAuthRedirect/NotAuthRedirect";
import AuthRedirect from "./components/utils/AuthRedirect/AuthRedirect";
//Services
import AuthService from "./services/auth";
import ServicesService from "./services/services";
import NotificationService from "./services/notifications";
import ProfileService from "./services/profile";
import SubscriptionsService from "./services/subscriptions";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    const user = localStorage.getItem("user");

    if (user) {
      this.setState({
        authUser: JSON.parse(user).user,
      });
    }
  }

  setAuthUser = (authUser) => {
    this.setState({
      authUser,
    });
  };

  removeAuthUser = () => {
    localStorage.removeItem("user");
    this.setState({ authUser: null }, () => {
      this.props.history.push("/");
    });
  };

  render() {
    const { location } = this.props;
    return (
      <>
        <Navbar
          authUser={this.state.authUser}
          removeAuthUser={this.removeAuthUser}
        />
        <ScrollToTopRoute exact path="/" component={HomePage} />
        <ScrollToTopRoute path="/services" component={ServicesPage} />
        <Route
          path="/service/:slug"
          render={(props) => (
            <SingleServiceContainer
              {...props}
              subscribe={this.props.subscriptionsService.subscribe}
              unsubscribe={this.props.subscriptionsService.unsubscribe}
              authUser={this.state.authUser}
              getService={this.props.servicesService.getService}
              notyService={this.props.notyService}
            />
          )}
        />
        <NotAuthRedirect
          path="/profile"
          component={ProfilePage}
          props={{
            setAuthUser: this.setAuthUser,
            notyService: this.props.notyService,
            updateData: this.props.profileService.updateData,
            removeAll: this.props.subscriptionsService.removeAll,
            removeOne: this.props.subscriptionsService.removeOne,
            getAll: this.props.subscriptionsService.getAll,
          }}
          isAuth={this.state.authUser !== null}
        />
        <AuthRedirect
          path="/login"
          component={SignPage}
          child={LoginForm}
          isAuth={this.state.authUser !== null}
          props={{
            loginUser: this.props.authService.loginUser,
            setAuthUser: this.setAuthUser,
            notyService: this.props.notyService,
          }}
        />
        <AuthRedirect
          path="/register"
          component={SignPage}
          child={RegisterForm}
          isAuth={this.state.authUser !== null}
          props={{
            registerUser: this.props.authService.registerUser,
            setAuthUser: this.setAuthUser,
            notyService: this.props.notyService,
          }}
        />
        {location.pathname !== "/login" &&
          location.pathname !== "/register" && <Footer />}
      </>
    );
  }
}

const Main = withRouter((props) => {
  return (
    <App
      subscriptionsService={new SubscriptionsService()}
      authService={new AuthService()}
      servicesService={new ServicesService()}
      notyService={new NotificationService()}
      profileService={new ProfileService()}
      {...props}
    />
  );
});

render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);

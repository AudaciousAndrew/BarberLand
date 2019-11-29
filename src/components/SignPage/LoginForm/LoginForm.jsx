import React from "react";
import ButtonLink from "../../Buttons/ButtonLink/ButtonLink";
import ButtonAction from "../../Buttons/ButtonAction/ButtonAction";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      password: "",
      errors: {}
    };
  }

  handleInput = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async () => {
    try {
      const response = await this.props.loginUser(this.state);
      localStorage.setItem(
        "user",
        JSON.stringify({
          token: response.headers["auth-token"],
          user: response.data
        })
      );
      this.props.setAuthUser(response.data);
      this.setState({
        errors: []
      });
      this.props.history.push("/");
    } catch (errors) {
      this.setState({ errors });
    }
  };

  render() {
    return (
      <>
        <form className="form">
          <div className="u-center-text u-margin-bottom-small">
            <h2 className="heading-tertiary">Login</h2>
          </div>
          <div className="form__group">
            {this.state.errors["login"] && (
              <small className="error">{this.state.errors["login"]}</small>
            )}
            <input
              type="text"
              className="form__input"
              placeholder="Login"
              id="login"
              name="login"
              onChange={this.handleInput}
              required
            />
            <label htmlFor="login" className="form__label">
              Login
            </label>
          </div>
          <div className="form__group">
           {this.state.errors["password"] && (
              <small className="error">{this.state.errors["password"]}</small>
            )}
            <input
              type="password"
              className="form__input"
              placeholder="Password"
              id="password"
              name="password"
              onChange={this.handleInput}
              required
            />
            <label htmlFor="password" className="form__label">
              Password
            </label>
          </div>
          <div className="form__group u-text-small u-clearfix">
            <div className="form__remember-wrapper u-float-left">
              <input id="remember" type="checkbox" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <ButtonLink
              location="/register"
              text="Forgot Password?"
              className="form__text-link u-float-right"
            />
          </div>
          <div className="form__group">
            <ButtonAction
              text="Enter"
              className="btn-square btn-square--dark-grey btn-square--w-100"
              handleClick={this.handleSubmit}
            />
          </div>
          <div className="form__group u-text-small u-center-text u-margin-top-medium">
            <span>Don't have an account yet?</span>
            <ButtonLink
              text="Sign Up"
              location="/register"
              className="form__text-link"
            />
          </div>
        </form>
      </>
    );
  }
}

export default LoginForm;

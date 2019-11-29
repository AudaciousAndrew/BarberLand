import React from "react";
import ButtonAction from "../../Buttons/ButtonAction/ButtonAction";

class RegisterForm extends React.Component {
  constructor() {
    super();

    this.state = {
      login: "",
      email: "",
      password: "",
      password_confirmation: "",
      errors: {}
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnClick = async () => {
    try {
      const response = await this.props.registerUser(this.state);
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
            <h2 className="heading-tertiary">Register</h2>
          </div>
          <div className="form__group">
            {this.state.errors["login"] && (
              <small className="error">{this.state.errors["login"]}</small>
            )}
            <input
              type="text"
              className="form__input"
              placeholder="Login"
              id="register-login"
              name="login"
              required
              onChange={this.handleInputChange}
            />
            <label htmlFor="login" className="form__label">
              Login
            </label>
          </div>
          <div className="form__group">
            {this.state.errors["email"] && (
              <small className="error">{this.state.errors["email"]}</small>
            )}
            <input
              type="email"
              className="form__input"
              placeholder="Email address"
              id="register-email"
              name="email"
              required
              onChange={this.handleInputChange}
            />
            <label htmlFor="password" className="form__label">
              Email address
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
              id="register-password"
              name="password"
              required
              onChange={this.handleInputChange}
            />
            <label htmlFor="password" className="form__label">
              Password
            </label>
          </div>
          <div className="form__group">
            <input
              type="password"
              className="form__input"
              placeholder="Confirm password"
              id="register-confirm-pass"
              name="password_confirmation"
              required
              onChange={this.handleInputChange}
            />
            <label htmlFor="password" className="form__label">
              Confirm password
            </label>
          </div>
          <div className="form__group">
            <ButtonAction
              className="btn-square btn-square--dark-grey btn-square--w-100"
              text="Submit"
              handleClick={this.handleOnClick}
            />
          </div>
        </form>
      </>
    );
  }
}

export default RegisterForm;

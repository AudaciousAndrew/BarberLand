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
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async () => {
    const response = await this.props.registerUser(this.state);
    localStorage.setItem(
      "user",
      JSON.stringify({
        token: response.headers["auth-token"],
        user: response.data,
      })
    );
    this.props.setAuthUser(response.data);
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <form className="form">
          <div className="u-center-text u-margin-bottom-small">
            <h2 className="heading-tertiary">Register</h2>
          </div>
          <div className="form__group">
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
          <div className="form__group u-margin-bottom-small">
            <ButtonAction
              className="btn-square btn-square--dark-grey btn-square--w-100"
              text="Submit"
              handleClick={this.handleSubmit}
            />
          </div>
        </form>
      </>
    );
  }
}

export default RegisterForm;

import React from "react";
import ButtonLink from "../../Buttons/ButtonLink/ButtonLink";
import ButtonAction from "../../Buttons/ButtonAction/ButtonAction";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      password: "",
    };
  }

  handleInput = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async () => {
    const response = await this.props.loginUser(this.state);
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
            <h2 className="heading-tertiary">Login</h2>
          </div>
          <div className="form__group">
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
          <div className="form__group">
            <ButtonAction
              text="Enter"
              className="btn-square btn-square--dark-grey btn-square--w-100"
              handleClick={this.handleSubmit}
            />
          </div>
          <div className="form__group u-text-small u-center-text">
            <div>Don't have an account yet?</div>
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

import React from "react";
import ButtonAction from "../../Buttons/ButtonAction/ButtonAction";

function RegisterForm() {
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
            required
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
            required
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
            required
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
            required
          />
          <label htmlFor="password" className="form__label">
            Confirm password
          </label>
        </div>
        <div className="form__group">
          <ButtonAction
            className="btn-square btn-square--dark-grey btn-square--w-100"
            text="Submit"
          />
        </div>
      </form>
    </>
  );
}

export default RegisterForm;

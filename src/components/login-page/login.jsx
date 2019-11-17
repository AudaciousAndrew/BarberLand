import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../button/button";

function Login() {
  return (
    <>
      <div className="section-login">
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
            <NavLink to="/services" className="form__text-link u-float-right">
              Forgot Password?
            </NavLink>
          </div>
          <div className="form__group">
            <Button
              location="/"
              className="btn-square btn-square--dark-grey btn-square--w-100"
              text="Enter"
            />
          </div>
          <div className="form__group u-text-small u-center-text u-margin-top-medium">
            <span>Don't have an account yet?</span>
            <NavLink to="/register" className="form__text-link">Sign Up</NavLink>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;

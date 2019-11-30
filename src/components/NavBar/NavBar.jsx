import React from "react";
import { NavLink } from "react-router-dom";
import UserMenu from "./UserMenu/UserMenu";

function Navbar({ authUser , setAuthUser }) {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-bar__logo-wrapper">
          <span className="nav-bar__logo">
            <NavLink className="nav-bar__link" to="/">
              BarberLand&trade;
            </NavLink>
          </span>
        </div>
        <nav className="nav-bar__navigation">
          <ul className="nav-bar__nav-list">
            <li className="nav-bar__item">
              <NavLink
                className="nav-bar__link"
                to="/"
                exact
                activeClassName="nav-bar__active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-bar__item">
              <NavLink
                className="nav-bar__link"
                to="/services"
                activeClassName="nav-bar__active"
              >
                Services
              </NavLink>
            </li>
            {!authUser && (
              <>
                <li className="nav-bar__item">
                  <NavLink
                    className="nav-bar__link"
                    to="/login"
                    activeClassName="nav-bar__active"
                  >
                    Log In
                  </NavLink>
                </li>
                <li className="nav-bar__item">
                  <NavLink
                    className="nav-bar__link"
                    to="/register"
                    activeClassName="nav-bar__active"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
            { authUser && <UserMenu setAuthUser={setAuthUser}/> }
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;

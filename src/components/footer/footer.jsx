import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__logo-box u-margin-bottom-big">
          <NavLink to="/" className="footer__logo footer__link">BarberLand&trade;</NavLink>
        </div>
        <div className="footer__row">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <NavLink className="footer__link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="footer__item">
                <NavLink className="footer__link" to="/services">
                  Services
                </NavLink>
              </li>
              <li className="footer__item">
                <NavLink className="footer__link" to="/login">
                  Log In
                </NavLink>
              </li>
              <li className="footer__item">
                <NavLink className="footer__link" to="/register">
                  Register
                </NavLink>
              </li>
              <li className="footer__item">
                <NavLink className="footer__link" to="/">
                  About us
                </NavLink>
              </li>
            </ul>
          </div>
          <p className="footer__copyright">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            voluptas ex libero veniam, nisi animi natus sed minus deserunt nihil
            delectus voluptates molestiae. Atque minima fugit, enim voluptatem
            asperiores a.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

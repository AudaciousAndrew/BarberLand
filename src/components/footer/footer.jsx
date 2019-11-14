import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__logo-box u-margin-bottom-big">
          <span className="footer__logo">BarberLand&trade;</span>
        </div>
        <div className="footer__row">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <Link className="footer__link" to="/">
                  Home
                </Link>
              </li>
              <li className="footer__item">
                <Link className="footer__link" to="/services">
                  Services
                </Link>
              </li>
              <li className="footer__item">
                <Link className="footer__link" to="/login">
                  Sign In/Up
                </Link>
              </li>
              <li className="footer__item">
                <Link className="footer__link" to="/">
                  Privacy policy
                </Link>
              </li>
              <li className="footer__item">
                <Link className="footer__link" to="/">
                  About us
                </Link>
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

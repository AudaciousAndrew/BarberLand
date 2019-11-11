import React from "react";
import Navbar from "./nav-bar/nav-bar";
import Button from "../button/button";

function Header() {
  return (
    <>
      <header className="header">
        <Navbar />
        <div className="header__text-box">
          <div className="header__heading-primary">
            <h1 className="header__text-wrapper">
              <span className="header__text-wrapper--main">BarberLand</span>
              <span className="header__text-wrapper--sub">
                is where style happens
              </span>
            </h1>
            <Button text="check out our reviews" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

import React from "react";
import Navbar from "./nav-bar/nav-bar";
import Button from "../button/button";

function Header() {
  return (
    <>
      <header className="header">
        <Navbar />
        <div className="header__text-box-wrapper">
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">BarberLand</span>
              <span className="heading-primary--sub">
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

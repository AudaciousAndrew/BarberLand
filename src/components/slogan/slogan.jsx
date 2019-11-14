import React from "react";
import Button from "../button/button";

function Slogan() {
  return (
    <>
      <header className="header">
        <div className="header__text-box-wrapper">
          <div className="header__text-box">
            <h1 className="heading-primary u-margin-top-huge">
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

export default Slogan;

import React from "react";

function Navbar() {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-bar__logo-wrapper">
          <span className="nav-bar__logo">BarberLand&trade;</span>
        </div>
        <nav className="nav-bar__navigation">
          <ul className="nav-bar__nav-list">
            <li className="nav-bar__link">Home</li>
            <li className="nav-bar__link">Services</li>
            <li className="nav-bar__link">Sign In/Up</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;

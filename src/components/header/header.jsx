import React from 'react';
import './_header.scss';

function Header() {
    return <>
    <header className="header">
      <div className="header__logo">
        BarberLand
      </div>
      <nav className="header__navigation">
        <ul className="header__nav-links">
          <li className="header__link">Home</li>
          <li className="header__link">Services</li>
          <li className="header__link">Sign in/up</li>
        </ul>
      </nav>
    </header>
    </>
}

export default Header;
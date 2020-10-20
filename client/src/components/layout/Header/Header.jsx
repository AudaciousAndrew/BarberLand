import React from "react";

function Header({ children , className }) {
  return (
    <>
      <header className={className}>
        <div className="header__text-box-wrapper">
          <div className={`${className}__text-box`}>
            {children}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

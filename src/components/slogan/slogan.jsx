import React from "react";

function Slogan({ children , className }) {
  return (
    <>
      <header className={className}>
        <div className="header__text-box-wrapper">
          <div className="header__text-box">
            {children}
          </div>
        </div>
      </header>
    </>
  );
}

export default Slogan;

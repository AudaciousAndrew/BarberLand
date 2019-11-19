import React from "react";
import { Link } from "react-router-dom";

function Button({ className, text , location , handleClick}) {
  return (
    <>
      <Link to={location} className={className} onClick={handleClick}>
        {text}
      </Link>
    </>
  );
}

export default Button;

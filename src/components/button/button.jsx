import React from "react";
import { Link } from "react-router-dom";

function Button({ className, text , location}) {
  return (
    <>
      <Link to={location} className={className}>
        {text}
      </Link>
    </>
  );
}

export default Button;

import React from "react";
import { NavLink } from "react-router-dom";

function ButtonLink({ className, text , location}) {
  return (
    <>
      <NavLink to={location} className={className}>
        {text}
      </NavLink>
    </>
  );
}

export default ButtonLink;

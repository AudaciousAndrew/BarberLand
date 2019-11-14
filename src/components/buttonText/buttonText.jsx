import React from "react";
import { Link } from "react-router-dom";

function ButtonText(props) {
  return (
    <>
      <div className="u-center-text u-margin-top-huge">
        <Link to={props.link} className="btn-text">
          {props.text}
        </Link>
      </div>
    </>
  );
}

export default ButtonText;

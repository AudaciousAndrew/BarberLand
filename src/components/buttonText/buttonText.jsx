import React from "react";

function ButtonText(props) {
  return (
    <>
      <div className="u-center-text u-margin-top-huge">
        <a href="/" className="btn-text">
          {props.text}
        </a>
      </div>
    </>
  );
}

export default ButtonText;

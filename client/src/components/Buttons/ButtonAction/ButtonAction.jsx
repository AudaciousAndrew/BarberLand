import React from "react";

function ButtonAction({ className, text , handleClick}) {
  return (
    <>
      <span className={className} onClick={handleClick}>
        {text}
      </span>
    </>
  );
}

export default ButtonAction;

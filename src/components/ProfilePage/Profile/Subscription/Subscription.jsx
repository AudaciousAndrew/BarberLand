import React from "react";

function Subscription({ date, name , onClose}) {
  let options = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  return (
    <>
      <div className="subscription">
        <span className="subscription__date">
          {new Date(date).toLocaleDateString("en-US", options)}
        </span>
        <span className="subscription__text">{name}</span>
        <span className="subscription__remove" onClick={onClose}>x</span>
      </div>
    </>
  );
}

export default Subscription;

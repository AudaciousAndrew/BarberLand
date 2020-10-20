import React from "react";

function Composition() {
  return (
    <>
      <div className="composition">
        <img
          src="/img/barber-1.jpg"
          alt="Team member 1"
          className="composition__photo composition__photo--p1"
        />
        <img
          src="/img/barber-2.jpg"
          alt="Team member 2"
          className="composition__photo composition__photo--p2"
        />
        <img
          src="/img/barber-3.jpg"
          alt="Team member 3"
          className="composition__photo composition__photo--p3"
        />
      </div>
    </>
  );
}

export default Composition;

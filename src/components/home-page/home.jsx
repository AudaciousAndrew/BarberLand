import React from "react";
import Slogan from "../slogan/slogan";
import Reviews from "../reviews/reviews";
import Button from "../button/button";

function Home() {
  return (
    <>
      <Slogan className="header">
        <h1 className="heading-primary u-margin-top-huge">
          <span className="heading-primary--main">BarberLand</span>
          <span className="heading-primary--sub">is where style happens</span>
        </h1>
        <Button
          location="/"
          className="btn btn--white btn--animated"
          text="check out our reviews"
        />
      </Slogan>
      <Reviews />
    </>
  );
}

export default Home;

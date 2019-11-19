import React from "react";
import Slogan from "../Slogan/Slogan";
import SectionReviews from "./SectionReviews/SectionReviews";
import Button from "../Button/Button";

function HomePage() {
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
      <SectionReviews />
    </>
  );
}

export default HomePage;

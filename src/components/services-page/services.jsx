import React from "react";
import Slogan from "../slogan/slogan";

function Services() {
  return (
    <>
      <Slogan className="header-2">
        <h1 className="heading-primary u-margin-top-huge">
          <span className="heading-primary--main">Quality</span>
          <span className="heading-primary--sub u-center-text">
            <sup>over</sup>Quantity
          </span>
        </h1>
      </Slogan>
      <section className="section-team">
        <div className="u-center-text">
          <h2 className="heading-secondary u-margin-bottom-big">
            You will fall in love with our team!
          </h2>
        </div>
        <div className="team-description">
          <div className="team-description__text">
            <h3 className="heading-quaternary">
              We have a team of the best professionals in their field
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              laborum quae, temporibus vel cupiditate ex quisquam saepe harum
              expedita omnis facere. Cupiditate unde nisi cumque eligendi nobis
              earum rerum consectetur?
            </p>
            <h3 className="heading-quaternary">
              Get hairstyle like you never have before!
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              laborum quae, temporibus vel cupiditate ex quisquam saepe harum
              expedita omnis facere. Cupiditate unde nisi cumque eligendi nobis
              earum rerum consectetur?
            </p>
          </div>
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
        </div>
      </section>
    </>
  );
}

export default Services;

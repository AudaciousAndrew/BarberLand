import React from "react";
import Composition from "./Composition/Composition";

function SectionTeam() {
  return (
    <>
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
          <Composition />
        </div>
      </section>
    </>
  );
}

export default SectionTeam;

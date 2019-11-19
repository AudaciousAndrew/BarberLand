import React from "react";
import Slogan from "../Slogan/Slogan";
import SectionTeam from "./SectionTeam/SectionTeam";
import SectionServices from "./SectionServices/SectionServices";


function ServicesPages() {
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
      <SectionTeam />
      <SectionServices />
    </>
  );
}

export default ServicesPages;

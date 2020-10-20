import React from "react";
import Header from "../../layout/Header/Header";
import SectionTeam from "./SectionTeam/SectionTeam";
import SectionServices from "./SectionServices/SectionServices";

function ServicesPages() {
  return (
    <>
      <Header className="header-2">
        <h1 className="heading-primary u-margin-top-huge">
          <span className="heading-primary--main">Quality</span>
          <span className="heading-primary--sub u-center-text">
            <sup>over</sup>Quantity
          </span>
        </h1>
      </Header>
      <SectionTeam />
      <SectionServices />
    </>
  );
}

export default ServicesPages;

import React from "react";
import Card from "../Card/Card";

function SectionServices() {
  return (
    <>
      <section className="section-services">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Services we provide</h2>
        </div>
        <div className="cards-container">
          <Card title="Get a unique hairstyle" price="30" index="1">
            <ul>
              <li>Stylist consultation</li>
              <li>Professional barber</li>
              <li>Unique design</li>
              <li>Comfy environment</li>
              <li>Tea and cookies</li>
            </ul>
          </Card>
          <Card title="Make a manly beard" price="25" index="2">
            <ul>
              <li>Stylist consultation</li>
              <li>Beard barber</li>
              <li>Rejuvenating procedure</li>
              <li>Free beard cream</li>
              <li>Tea and cookies</li>
            </ul>
          </Card>
          <Card title="Hot straight razor shave" price="15" index="3">
            <ul>
              <li>Trained specialist</li>
              <li>Hot steam treatments</li>
              <li>Rejuvenating procedure</li>
              <li>Comfy environment</li>
              <li>Tea and cookies</li>
            </ul>
          </Card>
        </div>
      </section>
    </>
  );
}

export default SectionServices;
import React from "react";

function Reviews() {
  return (
    <>
      <section className="section-reviews">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src="/videos/bg-video.mp4" type="video/mp4"/>
            Your browser is not supported!
          </video>
        </div>
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">We make people genuinely happy</h2>
        </div>
      </section>
    </>
  );
}

export default Reviews;

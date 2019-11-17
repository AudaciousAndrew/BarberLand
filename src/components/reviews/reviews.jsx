import React from "react";
import Story from "./story/story";
import {NavLink} from "react-router-dom";

function Reviews() {
  return (
    <>
      <section className="section-reviews">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src="/videos/bg-video.mp4" type="video/mp4" />
            Your browser is not supported!
          </video>
        </div>
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">We make people genuinely happy</h2>
        </div>
        <div className="reviews-container">
          <Story
            imgpath="/img/story-1.jpg"
            imgalt="female hairstyle"
            name="Mary Smith"
            title="I have the best hairstyle now"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            quidem id eaque distinctio asperiores eum inventore ab saepe,
            debitis quibusdam doloribus facere velit possimus eveniet beatae
            deleniti aliquid molestiae architecto."
          />
          <Story
            imgpath="/img/story-2.jpg"
            imgalt="male hairstyle"
            name="John Doe"
            title="WOW! My life is complitely different after visiting BarberLand"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            quidem id eaque distinctio asperiores eum inventore ab saepe,
            debitis quibusdam doloribus facere velit possimus eveniet beatae
            deleniti aliquid molestiae architecto."
          />
          <div className="u-center-text u-margin-top-huge">
            <NavLink className="btn-text btn-text--black-light" to="/services">
              Go to our services &rarr;
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reviews;

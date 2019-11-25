import React from "react";
import Story from "./Story/Story";
import BgVideo from "./BgVideo/BgVideo";
import ButtonLink from "../../Buttons/ButtonLink/ButtonLink";

function SectionReviews() {
  return (
    <>
      <section className="section-reviews">
        <BgVideo source="/videos/bg-video.mp4" />
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
            <ButtonLink
              text="Go to our services &rarr;"
              className="btn-text btn-text--black-light"
              location="/services"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionReviews;

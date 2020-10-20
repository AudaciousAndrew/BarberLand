import React from "react";
import axios from "axios";
import Story from "./Story/Story";
import BgVideo from "./BgVideo/BgVideo";
import ButtonLink from "../../../uui/Buttons/ButtonLink/ButtonLink";
import config from "../../../../config/configuration.js";

class SectionReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stories: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get(`${config.apiUrl}/stories/all`);
    this.setState({
      stories: response.data,
    });
  }

  render() {
    return (
      <>
        <section className="section-reviews">
          <BgVideo source="/videos/bg-video.mp4" />
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              We make people genuinely happy
            </h2>
          </div>
          <div className="reviews-container">
            {this.state.stories.map((element) => {
              return (
                <Story
                  key={element._id}
                  imgpath={element.imgpath}
                  imgalt={element.imgalt}
                  name={element.name}
                  title={element.title}
                  description={element.description}
                />
              );
            })}
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
}

export default SectionReviews;

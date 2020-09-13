import React from "react";

function Story(props) {
  return (
    <>
      <div className="story">
        <figure className="story__shape">
          <img
            src={props.imgpath}
            alt={props.imgalt}
            className="story__image"
          />
          <figcaption className="story__caption">{props.name}</figcaption>
        </figure>
        <div className="story__text">
          <h3 className="heading-tertiary u-margin-bottom-small">
            {props.title}
          </h3>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default Story;

import React from "react";
import ButtonLink from "../../Buttons/ButtonLink/ButtonLink";

function Card({ children, title , price, styleType , slug }) {
  return (
    <>
      <div className="card">
        <div className="card__side card__side--front">
          <div className={`card__picture card__picture--${styleType}`}></div>
          <h4 className="card__heading">
            <span className={`card__heading-span card__heading-span--${styleType}`}>
              {title}
            </span>
          </h4>
          <div className="card__details">
            {children}
          </div>
        </div>
        <div className={`card__side card__side--back card__side--back-${styleType}`}>
          <div className="card__cta">
            <div className="card__price-box">
              <div className="card__price-only">Only</div>
              <div className="card__price-value">${price}</div>
            </div>
            <ButtonLink location={`/service/${slug}`} className="btn btn--white" text="Book now!" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

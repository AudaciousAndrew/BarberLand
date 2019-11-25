import React from "react";
import ButtonAction from "../../Buttons/ButtonAction/ButtonAction";

function Card({ children, title , price, index }) {
  return (
    <>
      <div className="card">
        <div className="card__side card__side--front">
          <div className={`card__picture card__picture--${index}`}></div>
          <h4 className="card__heading">
            <span className={`card__heading-span card__heading-span--${index}`}>
              {title}
            </span>
          </h4>
          <div className="card__details">
            {children}
          </div>
        </div>
        <div className={`card__side card__side--back card__side--back-${index}`}>
          <div className="card__cta">
            <div className="card__price-box">
              <div className="card__price-only">Only</div>
              <div className="card__price-value">${price}</div>
            </div>
            <ButtonAction className="btn btn--white" text="Book now!" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

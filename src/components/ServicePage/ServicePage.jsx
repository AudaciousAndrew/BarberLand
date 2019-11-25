import React, { useState } from "react";
import DatePicker from "react-datepicker";
import ButtonAction from "../Buttons/ButtonAction/ButtonAction";
import "react-datepicker/dist/react-datepicker.css";

function ServicePage() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <section className="service">
        <div className="service__content">
          <div className="service__img-wrapper">
            <img src="/img/card-1.jpg" alt="test" className="service__img" />
          </div>
          <div className="service__input-box">
            <h3 className="heading-tertiary u-margin-bottom-small u-border-bottom-grey">
              Service name
            </h3>
            <div className="u-margin-bottom-small">
              <div className="u-center-text u-margin-bottom-small">
                <h2 className="heading-quaternary">Your contact info</h2>
              </div>
              <div className="service__inputs-container">
                <input
                  type="text"
                  placeholder="Firstname"
                  className="service__input"
                  required
                />
                <input
                  type="text"
                  placeholder="Surname"
                  className="service__input"
                  required
                />
                <input
                  type="text"
                  placeholder="Mobile number"
                  className="service__input"
                  required
                />
              </div>
            </div>
            <div className="u-margin-bottom-small">
              <div className="u-center-text u-margin-bottom-small">
                <h2 className="heading-quaternary">Customize your service</h2>
              </div>
              <div className="service__inputs-container">
                <DatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  showTimeSelect
                  minTime={new Date().setHours(8)}
                  maxTime={new Date().setHours(20)}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className="service__input w-100"
                />
                <select name="" id="" className="service__input">
                  <option defaultValue>Choose your favorite master</option>
                  <option value="Bob">Bob</option>
                  <option value="John">John</option>
                  <option value="Mary">Mary</option>
                  <option value="Nataly">Nataly</option>
                </select>
              </div>
            </div>
            <div className="u-margin-bottom-small">
              <div className="u-margin-bottom-small u-border-bottom-grey">
                <h2 className="heading-tertiary">Description</h2>
              </div>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                consequatur aspernatur cum, suscipit vel possimus voluptatem
                numquam deserunt neque quibusdam dolorum autem iste ullam
                laboriosam repellendus veniam earum. Quibusdam, voluptas?
                Blanditiis ad expedita voluptatibus repudiandae eveniet harum
                doloremque at autem.
              </p>
            </div>
            <div>
              <ButtonAction
                text="Sign up for the procedure"
                className="btn-square btn-square--dark-grey"
              />
              <ButtonAction
                text="Unsubscribe"
                className="btn-square btn-square--dark-grey"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicePage;
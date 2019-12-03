import React from "react";
import DatePicker from "react-datepicker";
import ButtonAction from "../../Buttons/ButtonAction/ButtonAction";
import "react-datepicker/dist/react-datepicker.css";

function SingleService({
  service,
  authUser,
  handleInputChange,
  handleDateChange,
  handleSubmit,
  handleUnsub,
  state
}) {
  return (
    <>
      {service ? (
        <section className="service">
          <div className="service__content">
            <div className="service__img-wrapper">
              <img src={service.imgpath} alt="test" className="service__img" />
            </div>
            <div className="service__input-box">
              <h3 className="heading-tertiary u-margin-bottom-small u-border-bottom-grey">
                {service.title}
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
                    name="firstname"
                    onChange={handleInputChange}
                    value={state.firstname}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Lastname"
                    className="service__input"
                    name="lastname"
                    onChange={handleInputChange}
                    value={state.lastname}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Mobile number"
                    className="service__input"
                    name="phone"
                    onChange={handleInputChange}
                    value={state.phone}
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
                    selected={state.date}
                    onChange={date => handleDateChange(date)}
                    showTimeSelect
                    minTime={new Date().setHours(8)}
                    maxTime={new Date().setHours(20)}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className="service__input"
                  />
                  <select
                    value={state.master}
                    onChange={handleInputChange}
                    name="master"
                    className="service__input"
                  >
                    <option value="default" disabled>
                      Choose your favorite master
                    </option>
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
                <p className="paragraph">{service.description}</p>
              </div>
              <div>
                <ButtonAction
                  text="Sign up for the procedure"
                  className="btn-square btn-square--dark-grey"
                  handleClick={handleSubmit}
                />
                {authUser && (
                  <ButtonAction
                    text="Unsubscribe"
                    className="btn-square btn-square--dark-grey"
                    handleClick={handleUnsub}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="u-center-text">
          <img src="/img/loading.gif" alt="Loading" />
        </div>
      )}
    </>
  );
}

export default SingleService;

import React from "react";
import ButtonAction from "../../Buttons/ButtonAction/ButtonAction";

function Profile({
  handleInputChange,
  handleEditInput,
  handleOnBlur,
  handleProfileSubmit,
  firstnameRef,
  lastnameRef,
  phoneRef,
  state
}) {
  return (
    <>
      {state ? (
        <div className="profile">
          <div>
            <h4 className="heading-quaternary profile__caption">User info</h4>
            <ul className="profile__list">
              <li className="profile__item">
                <h6 className="profile__item-title">first name</h6>
                <span className="profile__input-group">
                  <input
                    type="text"
                    ref={firstnameRef}
                    name="firstname"
                    onChange={handleInputChange}
                    disabled
                    value={state.firstname}
                    onBlur={() => {
                      handleOnBlur(firstnameRef);
                    }}
                    className="profile__input-field"
                  />
                  <i
                    className="fas fa-edit profile__input-icon"
                    onClick={() => {
                      handleEditInput(firstnameRef);
                    }}
                  ></i>
                </span>
              </li>
              <li className="profile__item">
                <h6 className="profile__item-title">last name</h6>
                <span className="profile__input-group">
                  <input
                    type="text"
                    ref={lastnameRef}
                    name="lastname"
                    onChange={handleInputChange}
                    disabled
                    value={state.lastname}
                    onBlur={() => {
                      handleOnBlur(lastnameRef);
                    }}
                    className="profile__input-field"
                  />
                  <i
                    className="fas fa-edit profile__input-icon"
                    onClick={() => {
                      handleEditInput(lastnameRef);
                    }}
                  ></i>
                </span>
              </li>
              <li className="profile__item">
                <h6 className="profile__item-title">mobile number</h6>
                <span className="profile__input-group">
                  <input
                    type="text"
                    ref={phoneRef}
                    name="phone"
                    onChange={handleInputChange}
                    disabled
                    value={state.phone}
                    onBlur={() => {
                      handleOnBlur(phoneRef);
                    }}
                    className="profile__input-field"
                  />
                  <i
                    className="fas fa-edit profile__input-icon"
                    onClick={() => {
                      handleEditInput(phoneRef);
                    }}
                  ></i>
                </span>
              </li>
              <li className="profile__item">
                <h6 className="profile__item-title">member since</h6>
                <span>{new Date(state.date).toDateString()}</span>
              </li>
              <li className="profile__item">
                <ButtonAction
                  className="btn-square btn-square--dark-grey btn-square--w-100"
                  text="Save changes"
                  handleClick={handleProfileSubmit}
                />
              </li>
            </ul>
          </div>
          <div>
            <h4 className="heading-quaternary profile__caption u-center-text">
              Subscriptions
            </h4>
            <div className="profile__container">
              <div className="profile__subscription">
                <span className="profile__sub-date">02.03.19 23:23</span>
                <span className="profile__sub-text">
                  Get a unique hairstyle
                </span>
                <span className="profile__sub-remove">x</span>
              </div>
              <div className="profile__subscription">
                <span className="profile__sub-date">02.03.19 23:23</span>
                <span className="profile__sub-text">Make a manly beard</span>
                <span className="profile__sub-remove">x</span>
              </div>
              <div className="profile__subscription">
                <span className="profile__sub-date">02.03.19 23:23</span>
                <span className="profile__sub-text">
                  Hot straight razor shave
                </span>
                <span className="profile__sub-remove">x</span>
              </div>
              <div className="profile__subscription">
                <span className="profile__sub-date">02.03.19 23:23</span>
                <span className="profile__sub-text">Test service subsc</span>
                <span className="profile__sub-remove">x</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="heading-quaternary profile__caption u-right-text">
              User Panel
            </h4>
            <div className="profile__container">
              <ButtonAction
                className="btn-square btn-square--dark-grey btn-square--w-100"
                text="Remove all subscriptions"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="u-center-text">
          <img src="/img/loading.gif" alt="Loading" />
        </div>
      )}
    </>
  );
}

export default Profile;

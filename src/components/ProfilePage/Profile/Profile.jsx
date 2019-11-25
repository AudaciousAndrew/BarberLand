import React from "react";
import ButtonAction from "../../Buttons/ButtonAction/ButtonAction";

function Profile() {
  return (
    <>
      <div className="profile">
        <div>
          <h4 className="heading-quaternary profile__caption">User info</h4>
          <ul className="profile__list">
            <li className="profile__item">
              <h6 className="profile__item-title">first name</h6>
              <span>Andrew</span>
            </li>
            <li className="profile__item">
              <h6 className="profile__item-title">second name</h6>
              <span>Melnik</span>
            </li>
            <li className="profile__item">
              <h6 className="profile__item-title">mobile number</h6>
              <span>+7 996 763 18 74</span>
            </li>
            <li className="profile__item">
              <h6 className="profile__item-title">member since</h6>
              <span>23.11.2019</span>
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
              <span className="profile__sub-text">Get a unique hairstyle</span>
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
          <h4 className="heading-quaternary profile__caption u-right-text">User Panel</h4>
          <div className="profile__container">
            <ButtonAction
              className="btn-square btn-square--dark-grey btn-square--w-100"
              text="Change details"
            />
            <ButtonAction
              className="btn-square btn-square--dark-grey btn-square--w-100"
              text="Remove all subscriptions"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

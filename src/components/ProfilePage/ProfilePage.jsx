import React from "react";
import Header from "../../components/Header/Header";
import Profile from "./Profile/Profile";

function ProfilePage() {
  return (
    <>
      <Header className="header-3">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Profile Settings</span>
        </h1>
      </Header>
      <section className="section-profile">
        <Profile />
      </section>
    </>
  );
}

export default ProfilePage;

import React from "react";
import Header from "../../components/Header/Header";
import Profile from "./Profile/Profile";
import config from "../../config/configuration.js";
import axios from "axios";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      phone: "",
      date: "",
      subscriptions: []
    };
    this.firstnameRef = React.createRef();
    this.lastnameRef = React.createRef();
    this.phoneRef = React.createRef();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const user = JSON.parse(localStorage.getItem("user")).user;
    this.setState({
      firstname: user.firstname,
      lastname: user.lastname,
      phone: user.phone,
      date: user.date
    });
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleEditInput = ref => {
    ref.current.disabled = false;
    ref.current.focus();
  };

  handleOnBlur = ref => {
    ref.current.disabled = true;
  };

  handleProfileSubmit = () => {
    const updatedUser = JSON.parse(localStorage.getItem("user"));
    updatedUser.user.firstname = this.state.firstname;
    updatedUser.user.lastname = this.state.lastname;
    updatedUser.user.phone = this.state.phone;
    this.props.updateData(updatedUser);
  };

  render() {
    return (
      <>
        <Header className="header-3">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Profile Settings</span>
          </h1>
        </Header>
        <section className="section-profile">
          <Profile
            firstnameRef={this.firstnameRef}
            lastnameRef={this.lastnameRef}
            phoneRef={this.phoneRef}
            state={this.state}
            handleProfileSubmit={this.handleProfileSubmit}
            handleOnBlur={this.handleOnBlur}
            handleEditInput={this.handleEditInput}
            handleInputChange={this.handleInputChange}
          />
        </section>
      </>
    );
  }
}

export default ProfilePage;

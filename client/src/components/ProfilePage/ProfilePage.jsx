import React from "react";
import Header from "../../components/Header/Header";
import Profile from "./Profile/Profile";

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

  async componentDidMount() {
    window.scrollTo(0, 0);
    const userData = JSON.parse(localStorage.getItem("user"));
    const subscriptions = await this.props.getAll(
      userData.user._id,
      userData.token
    );
    this.setState({
      firstname: userData.user.firstname,
      lastname: userData.user.lastname,
      phone: userData.user.phone,
      date: userData.user.date,
      subscriptions
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

  handleProfileSubmit = async () => {
    const updatedUser = JSON.parse(localStorage.getItem("user"));
    updatedUser.user.firstname = this.state.firstname;
    updatedUser.user.lastname = this.state.lastname;
    updatedUser.user.phone = this.state.phone;
    this.props.setAuthUser(updatedUser.user);
    await this.props.updateData(updatedUser);
  };

  handleRemoveAll = async () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    await this.props.removeAll(userData.user._id, userData.token);
    this.setState({ subscriptions: [] });
  };

  handleRemoveOne = async subId => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const subscriptions = this.state.subscriptions.filter(
      element => element._id !== subId
    );
    await this.props.removeOne(userData.user._id, userData.token, subId);
    this.setState({ subscriptions });
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
            handleRemoveOne={this.handleRemoveOne}
            handleRemoveAll={this.handleRemoveAll}
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

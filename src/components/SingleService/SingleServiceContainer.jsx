import React from "react";
import SingleService from "./Service/SingleService";

class SingleServiceContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      service: null,
      firstname: "",
      lastname: "",
      phone: "",
      date: new Date().setHours(9,0,0),
      master: "default"
    };
  }

  async componentDidMount() {
    const service = await this.props.getService(this.props.match.params.slug);
    const user = this.props.authUser;
    this.setState({ service });
    if (user !== null) {
      this.setState({
        firstname: user.firstname !== "Not set." ? user.firstname : "",
        lastname: user.lastname !== "Not set." ? user.lastname : "",
        phone: user.phone !== "Not set." ? user.phone : ""
      });
    }
    window.scrollTo(0, 0);
  }

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleDateChange = date => {
    this.setState({
      date
    });
  };

  handleSubmit = () => {
    const subscription = {
      date: this.state.date,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phone: this.state.phone,
      master: this.state.master,
      type: this.state.service.title,
      userId: this.props.authUser ? this.props.authUser._id : ""
    }
    this.props.subscribe(subscription);
  }

  handleUnsub = () => {
    this.props.unsubscribe(this.props.authUser._id,this.state.service.title);
  }

  render() {
    return (
      <>
        <SingleService
          state={this.state}
          handleDateChange={this.handleDateChange}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          handleUnsub={this.handleUnsub}
          service={this.state.service}
          authUser={this.props.authUser}
        />
      </>
    );
  }
}

export default SingleServiceContainer;

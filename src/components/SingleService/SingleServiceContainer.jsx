import React from "react";
import SingleService from "./Service/SingleService";

class SingleServiceContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      service: null
    };
  }

  async componentDidMount() {
    const service = await this.props.getService(this.props.match.params.slug);
    this.setState({service});
  }

  render() {
    return (
      <>
        <SingleService service={this.state.service}/>
      </>
    );
  }
}

export default SingleServiceContainer;

import React from "react";
import Header from "../Header/Header";
import SectionReviews from "./SectionReviews/SectionReviews";
import ButtonAction from "../Buttons/ButtonAction/ButtonAction";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event) {
    event.preventDefault();
    window.scrollTo(0, this.myRef.current.offsetTop);
  }

  render() {
    return (
      <>
        <Header className="header">
          <h1 className="heading-primary u-margin-bottom-big">
            <span className="heading-primary--main">BarberLand</span>
            <span className="heading-primary--sub">is where style happens</span>
          </h1>
          <ButtonAction
            className="btn btn--white btn--animated"
            text="check out our reviews"
            handleClick={this.handleButtonClick}
          />
        </Header>
        <div ref={this.myRef}>
          <SectionReviews />
        </div>
      </>
    );
  }
}

export default HomePage;

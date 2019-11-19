import React from "react";
import Slogan from "../Slogan/Slogan";
import SectionReviews from "./SectionReviews/SectionReviews";
import Button from "../Button/Button";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event) {
    event.preventDefault();
    //console.log(this.myRef);

    window.scrollTo(0, this.myRef.current.offsetTop);
  }

  render() {
    return (
      <>
        <Slogan className="header">
          <h1 className="heading-primary u-margin-top-huge">
            <span className="heading-primary--main">BarberLand</span>
            <span className="heading-primary--sub">is where style happens</span>
          </h1>
          <Button
            location="#"
            className="btn btn--white btn--animated"
            text="check out our reviews"
            handleClick={this.handleButtonClick}
          />
        </Slogan>
        <div ref={this.myRef}>
          <SectionReviews />
        </div>
      </>
    );
  }
}

export default HomePage;

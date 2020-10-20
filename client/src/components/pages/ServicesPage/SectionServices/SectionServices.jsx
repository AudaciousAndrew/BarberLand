import React from "react";
import Card from "../Card/Card";
import axios from "axios";
import config from "../../../../config/configuration.js";

class SectionServices extends React.Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get(`${config.apiUrl}/services/cards/all`);
    this.setState({
      cards: response.data,
    });
  }

  render() {
    return (
      <>
        <section className="section-services">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Services we provide</h2>
          </div>
          <div className="cards-container">
            {this.state.cards.map((card) => {
              return (
                <Card
                  key={card._id}
                  title={card.title}
                  price={card.price}
                  styleType={card.styleType}
                  slug={card.slug}
                >
                  <ul>
                    {card.features.map((element) => {
                      return <li key={element}>{element}</li>;
                    })}
                  </ul>
                </Card>
              );
            })}
          </div>
        </section>
      </>
    );
  }
}

export default SectionServices;

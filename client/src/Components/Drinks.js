import React, { Component } from "react";
import "./Drinks.css";
import axios from "axios";
import { Link } from "react-router-dom";

class Drinks extends Component {
  state = {
    drinks: []
  };

  componentDidMount() {
    axios
      .get("/api/all/")
      .then(response => this.setState({ drinks: response.data.drinks }));
  }

  render() {
    return (
      <main id="all-drinks">
        {this.state.drinks.map((drink, i) => (
          <Link className="pagelink" key={drink.idDrink} to={`/Detailed/${drink.idDrink}`}>
            <div id="positions" key={i}>
              <img
                className="drinks"
                src={drink.strDrinkThumb}
                alt="Alcoholic Beverage"
              />
              <div className="namebox">
              {drink.strDrink}
              </div>
            </div>
          </Link>
        ))}
      </main>
    );
  }
}

export default Drinks;

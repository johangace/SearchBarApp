import React, { Component } from "react";
import "./Drinks.css";
import axios from 'axios'

class Drinks extends Component {
  state = {
    drinks: []
  };

  componentDidMount(){
    axios.get("/api/all/")
    .then(response => this.setState({ drinks: response.data.drinks}))
  }

render() {
  return (
    <main id="drinks">
      {this.state.drinks.map((drink, i) => (
        <img key={i}
        className="drinks"
        src={drink.strDrinkThumb}
        alt="Alcoholic Beverage" 
        />
      )
        )}
    </main>
  )
}
}

export default Drinks;

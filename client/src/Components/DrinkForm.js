import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./DrinkForm.css";

class DrinkForm extends React.Component {
  state = {
    drinkData: []
  };

  getDrink = event => {
    const drink = event.target.value;
    if (event.target.value) {
      event.preventDefault();
      axios
        .get(`/api/search/${drink}`)
        .then(response =>
          this.setState({ drinkData: response.data.drinks || [] })
        );
    }
  };

  render() {
    return (
      <>
        <div class="drinkform-div">
          <h2>What's your drink?</h2>
          <br />
          <input
            placeholder="Search Drink"
            // name="nameOfDrink"
            type="search"
            autoComplete="off"
            onChange={this.getDrink}
          />

          <div id="drinks">
            {this.state.drinkData.map((drink, i) => (
              <Link key={drink.idDrink} to={`/Detailed/${drink.idDrink}`}>
                <div key={i} className="drink">
                  <h3>{drink.strDrink}</h3>
                  <img src={drink.strDrinkThumb} alt="cocktail" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default DrinkForm;

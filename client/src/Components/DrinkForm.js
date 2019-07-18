import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./DrinkForm.css";
import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"

class DrinkForm extends React.Component {
  state = {
    drinkData: []

  }

  getDrink= event => {
    const drink = event.target.value
    if(drink && drink.length >=3) {
    event.preventDefault();
    axios.get(`/api/search/${drink}`)
        .then(response => this.setState({drinkData: response.data.drinks || [] }))
        //.then(response => console.log(response.data))
    } else this.setState({ drinkData: [] })
  }



  render(){
    return(
      <div id="front">
        <h2>What would you like to drink? </h2>
          <input id="input"
           type="text" 
           required
            placeholder=" Search Drink"
            type="search"
            autoComplete="off"
            onChange={this.getDrink}
          />
         <Link id="surprise" to = "/Surprise">Surprise Me!</Link>
          <div id="drinkspics">
            {this.state.drinkData.map((drink, i) => (
              <Link className="moredrinks" key={drink.idDrink} to={`/Detailed/${drink.idDrink}`}>
                <div key={i} className="drink">
                  <img src={drink.strDrinkThumb} alt="cocktail" />
                  <div className="namebox">
                    <h3 className="hay3">{drink.strDrink}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  }
=======


export default DrinkForm;

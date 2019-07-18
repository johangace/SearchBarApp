import React from "react";
import axios from "axios";

class Detailed extends React.Component {
  state = { drink: {} };

  showIngredients = () => {
    let { drink } = this.state;
    let list = [];
    for (let i = 1; i < 16; i++) {
      if (drink["strMeasure" + i] && (drink["strMeasure" + i].trim() && drink["strIngredient" + i].trim())) {
        list.push(
          <li key={i}>{`${drink["strMeasure" + i]} of ${
            drink["strIngredient" + i]
          }`}</li>
        );
      }
    }
    return list;
  };

  componentDidMount() {
    axios.get(`/api/one/${this.props.match.params.id}`).then(response => {
    this.setState({ drink: response.data.drinks[0] || {} });
    });
  }

  render() {
    const { drink } = this.state;
    return (
      <div id="detailed">
    <img height="200px" src={drink.strDrinkThumb} alt="fancydrink" /> 
    <span id="recipe"><h1>{drink.strDrink}</h1> {/*Drink name */}
        <hr />
        <p>{drink.strGlass}</p> {/*Drink glass */}
        <hr />
        {drink.idDrink && this.showIngredients()}
        {/* Map of the drink will return <li>{drink measurement} {matching drink ingredient}</li> */}
        <hr />
        <p>{drink.strInstructions}</p> {/*Drink instructions */} 
        <h4>Enjoy!</h4> 
        </span>
      </div>
    );
  }
}

export default Detailed;

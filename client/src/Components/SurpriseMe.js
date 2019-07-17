import React from 'react';
import axios from 'axios';



class SurpriseMe extends React.Component {

  state = {
    drink: {}
  }

  componentDidMount = ()=> {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(response =>{
          this.setState({drink: response.data.drinks[0]|| [] })  
         })
  }

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

  render(){
    let {drink}= this.state
    return(
      <>
      {
        Object.keys(drink).length > 0 && 
      
          <div id="detailed">
            <img height="200px" src={drink.strDrinkThumb} alt="fancydrink" />
            <h3>{drink.strDrink}</h3> {/*Drink name */}
            <hr />
            <p>{drink.strGlass}</p> {/*Drink glass */}
            <hr />
            {drink.idDrink && this.showIngredients()}
            {/* Map of the drink will return <li>{drink measurement} {matching drink ingredient}</li> */}
            <hr />
            <p>{drink.strInstructions}</p> {/*Drink instructions */}
            <hr />
            <h4>Enjoy!</h4>
          </div>
      }
       


      </> 
    )
  }  
}



export default SurpriseMe

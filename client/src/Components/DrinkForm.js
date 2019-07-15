import React from 'react';
import axios from 'axios';



class DrinkForm extends React.Component {

  state = {
    drinkData: []
  }

  getDrink= event => {
    const drink = event.target.value
    if(event.target.value){
    event.preventDefault();  
    axios.get(`/api/search/${drink}`)
        .then(response => this.setState({drinkData: response.data.drinks || [] }))
        //.then(response => console.log(response.data))
    }
  }

  render(){
    return(
      <>
        <h2>What's your drink?</h2>
        <br></br>
          <input 
            placeholder="Search Drink"
            // name="nameOfDrink" 
            type="search"
            autoComplete="off"
            onChange={this.getDrink} 
            /> 
          
        <div id="drinks">  
          {this.state.drinkData.map((drink,i) => (
          // <Link key={drink.idDrink} to={`${drink.idDrink}`}>
              <div key={i} className="drink"> 
                <h3>{drink.strDrink}</h3>
                <img src={drink.strDrinkThumb} alt="cocktail"/> 
              </div>
            // </Link> //connect
          ))}
        </div> 
      </> 
    )
  }  
}



export default DrinkForm

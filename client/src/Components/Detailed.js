import React from 'react'
import axios from 'axios'

class Detailed extends React.Component {
  state = { drinks: [] }

  componentDidMount(){
    axios.get(`api/search/${this.props.match.params.idDrink}`)
      .then(response => this.setState({ drinks: response.data}))
  }
  render(){
    const { drinks } = this.state
    return(
      <React.Fragment>
       { <img height="300px" src={drinks.strDrinkThumb} alt="fancy-drink"/> } 
        <h3>{drinks.strDrink}</h3> {/*Drink name */}
        <hr/>
        <p>{drinks.strGlass}</p> {/*Drink glass */}
        <hr/>
        {<li>{drinks.strMeasure1 && drinks.strIngredient1}</li>}
        {<li>{drinks.strMeasure2 && drinks.strIngredient2}</li>}
        {<li>{drinks.strMeasure3 && drinks.strIngredient3}</li>}
        {<li>{drinks.strMeasure4 && drinks.strIngredient4}</li>}
        {<li>{drinks.strMeasure5 && drinks.strIngredient5}</li>}
        {<li>{drinks.strMeasure6 && drinks.strIngredient6}</li>}
        {<li>{drinks.strMeasure7 && drinks.strIngredient7}</li>}
        {<li>{drinks.strMeasure8 && drinks.strIngredient8}</li>}
        {<li>{drinks.strMeasure9 && drinks.strIngredient9}</li>}
        {<li>{drinks.strMeasure10 && drinks.strIngredient10}</li>}
        {<li>{drinks.strMeasure11 && drinks.strIngredient11}</li>}
        {<li>{drinks.strMeasure12 && drinks.strIngredient12}</li>}
        {<li>{drinks.strMeasure13 && drinks.strIngredient13}</li>}
        {<li>{drinks.strMeasure14 && drinks.strIngredient14}</li>}
        {<li>{drinks.strMeasure15 && drinks.strIngredient15}</li>}
        {/* Map of the drink will return <li>{drink measurement} {matching drink ingredient}</li> */}
        <hr/>
        <p>{drinks.strInstructions}</p> {/*Drink instructions */}
        <hr/>
        <h4>Enjoy!</h4>
      </React.Fragment>
    )
  }
}

export default Detailed

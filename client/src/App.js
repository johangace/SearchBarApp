import React from 'react'
import './App.css'
import DrinkForm from './Components/DrinkForm';
import axios from 'axios';


class App extends React.Component {
  state = { 
    drinkData: {}
 }

//  getDrink= event => {
//   const drink = event.target.value
//   if(event.target.value){
//   event.preventDefault();  
//   axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
//        .then(response => this.setState({ drinkData: response.data }))
//   }
  
// }

 getDrink= async event => {
  event.preventDefault();
  const drink = event.target.elements.nameOfDrink.value
  //nameOfDrink.comes from drinkForms form name= "nameOfDrink."

  if (!drink) return;
  let {data}= await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`);
  this.setState({ drinkData: data});
}



  render(){
    return (
      <div id="demo">
        <DrinkForm getDrinkInfo= {this.getDrink}/>
       {/* <Display drink= {this.state.drinkData }/> */}
      </div>
    )
  }
}

export default App

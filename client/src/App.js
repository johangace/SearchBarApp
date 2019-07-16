import React from "react";
import "./App.css";
import DrinkForm from "./Components/DrinkForm";
import Drinks from "./Components/Drinks"
import Detailed from "./Components/Detailed"
import ButtonAppBar from './Components/Navbar';

class App extends React.Component {
  state = { serverMessage: "" };

  render() {
    return (
      // This shows how to render the Navbar component named ButtonAppBar
      <div id="demo">
        <ButtonAppBar />
        <DrinkForm />
        <Drinks />
        <Detailed idDrink="17199"/>
        {/* <Display drink= {this.state.drinkData }/> */}

      </div>
    );
  }
}

export default App;

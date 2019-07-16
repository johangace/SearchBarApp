import React from "react";
import "./App.css";
import DrinkForm from "./Components/DrinkForm";
import Drinks from "./Components/Drinks"
import Detailed from "./Components/Detailed"

class App extends React.Component {
  state = { serverMessage: "" };

  render() {
    return (
      <div id="demo">
        <DrinkForm />
        <Drinks />
        <Detailed idDrink="17199"/>
        {/* <Display drink= {this.state.drinkData }/> */}
      </div>
    );
  }
}

export default App;

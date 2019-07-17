import React from "react";
import "./App.css";
import DrinkForm from "./Components/DrinkForm";
import Drinks from "./Components/Drinks";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detailed from './Components/Detailed';
import Navbar from './Components/Navbar'
import SurpriseMe from "./Components/SurpriseMe";


class App extends React.Component {

  render() {
    return (
     
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={DrinkForm}/>
          <Route exact path="/AllDrinks" component={Drinks}/>
          <Route path="/Detailed/:id" component={Detailed}/>
        </Switch>
        <SurpriseMe/>
      </BrowserRouter>
    );
  }
}

export default App;

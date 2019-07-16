import React from "react";
import "./App.css";
import DrinkForm from "./Components/DrinkForm";
import Drinks from "./Components/Drinks";
import { BrowserRouter, Route } from "react-router-dom";
import Detailed from './Components/Detailed';
import Navbar from './Components/Navbar'

class App extends React.Component {
  state = { serverMessage: "" };

  // componentDidMount() {
  //   fetch("/api/demo")
  //     .then(response => response.json())
  //     .then(data => this.setState({ serverMessage: data.message }));
  // }

  render() {
    return (
      <BrowserRouter>
      <Navbar/>
          <Route path="/" component={DrinkForm}/>
          <Route path="/AllDrinks" component={Drinks}/>
          <Route path="/Detailed/:id" component={Detailed}/>
      </BrowserRouter>
    );
  }
}

export default App;

import React from "react";
import "./App.css";
import DrinkForm from "./Components/DrinkForm";
import Drinks from "./Components/Drinks"

class App extends React.Component {
  state = { serverMessage: "" };

  componentDidMount() {
    fetch("/api/demo")
      .then(response => response.json())
      .then(data => this.setState({ serverMessage: data.message }));
  }

  render() {
    return (
      <div id="demo">
        <DrinkForm />
        <Drinks />
        {/* <Display drink= {this.state.drinkData }/> */}
      </div>
    );
  }
}

export default App;

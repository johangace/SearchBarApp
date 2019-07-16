import React from "react";
import "./App.css";
import DrinkForm from "./Components/DrinkForm";

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
        {/* <Display drink= {this.state.drinkData }/> */}
      </div>
    );
  }
}

export default App;

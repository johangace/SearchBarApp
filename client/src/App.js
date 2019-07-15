import React from 'react'
import './App.css'
import DrinkForm from './Components/DrinkForm';


class App extends React.Component {

  render(){
    return (
      <div id="demo">
        <DrinkForm />
       {/* <Display drink= {this.state.drinkData }/> */}
      </div>
    )
  }
}

export default App

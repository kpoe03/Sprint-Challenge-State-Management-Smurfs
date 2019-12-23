import React, { Component } from "react";
import "./App.css";
import AddVillager from './AddVillager'
import SmurfVillage from './SmurfVillage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! </h1>
 
        <AddVillager />
        <SmurfVillage />

      </div>
    );
  }
}

export default App;
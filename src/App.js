import React, { Component } from "react";
import "./App.css";
import WordCard from "./WordCard.js";
import CharacterCard from "./CharacterCard.js";

const word = "KOKI";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React by 5935512014</h1>
        </header>
        <div className="AppHandler as Props">
          <h1 className="App-Question"> Who am I ? </h1>
          <WordCard value="PANGKOKI" />
        </div>
      </div>
    );
  }
}
export default App;

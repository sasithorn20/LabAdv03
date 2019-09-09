import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard.js';
import WordCard from './WordCard.js';

const word = "KOKI";
class App extends Component {
  render() {
    return (
      <div>
        <WordCard value="KOKI" />
      </div>
    );
  }
}
export default App;
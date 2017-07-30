import React, { Component } from 'react';
import './App.css';
import logo from './av1-logo.png';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="under_construction">Under Construction</div> 
          <div>
            <div className="img__wrapper" />
            <img src={logo} alt="i have failed you" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

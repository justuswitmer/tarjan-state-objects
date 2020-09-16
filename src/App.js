import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // Defining initial state
  state = {
    cohortName: 'Tarjan',
    salutation: 'Hello',
    name: 'Justus'
  }
  render() {
    return (
      <div>
        <h1>{this.state.cohortName} Learns State with Objects</h1>
        <div>
          {this.state.salutation}! My name is {this.state.name}.
        </div>
      </div>
    );
  }
}

export default App;

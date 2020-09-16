import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // Defining initial state
  state = {
    cohortName: 'Tarjan',
    salutation: 'Hello',
    user: {
      name: 'Justus',
      whereILive: 'Burnsville',
      pizzaTopping: 'roasted red peppers'
    },

  }
  render() {
    return (
      <div>
        <h1>{this.state.cohortName} Learns State with Objects</h1>
        <div>
          {this.state.salutation}! My name is {this.state.user.name}.
        </div>
        <ul>
          <li>My name is {this.state.user.name}.</li>
          <li>I live in {this.state.user.whereILive}.</li>
          <li>My favorite pizza topping is {this.state.user.pizzaTopping}.</li>
        </ul>
      </div>
    );
  }
}

export default App;

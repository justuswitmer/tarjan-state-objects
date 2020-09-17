import React, { Component } from 'react'; // eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Creatures from './Creatures';

class App extends Component {

  // Defining initial state
  state = {
    cohortName: 'Tarjan',
    salutation: 'Hello',
    creaturOTNight: '',
    user: {
      name: 'Justus',
      whereILive: 'Burnsville',
      pizzaTopping: 'roasted red peppers'
    },


  }
  onChangePizza = (event) => {
    let newPizzaTopping = event.target.value;
    console.log('changed pizza topping', newPizzaTopping);

    this.setState({
      user: {
        // fancy JS syntax
        /// ... === "spread operator"
        ...this.state.user,
        pizzaTopping: newPizzaTopping

      }
    });
  }

  onChangeCreature = (event) => {
    console.log('creature of the night', event.target.value);
    this.setState({
      creaturOTNight: event.target.value
    })
  }

  render() {
    console.log('state', this.state);

    return (
      <div>
        <h1>{this.state.cohortName} Learns State with Objects</h1>
        <h4>Mythical Creatures</h4>
        <Creatures creatureProp={this.state.creaturOTNight} />
        <div>
          {this.state.salutation}!
        </div>
        <ul>
          <li>My name is {this.state.user.name}.</li>
          <li>I live in {this.state.user.whereILive}.</li>
          <li>My favorite pizza topping is {this.state.user.pizzaTopping}.</li>
        </ul>

        <h4>Edit user form</h4>
        <input type="text" placeholder="Favorite Pizza Topping" onChange={this.onChangePizza} />


        <h4>Creature of the Night</h4>
        <input type="text" placeholder="Creature of the Night" onChange={this.onChangeCreature} />

      </div>
    );
  }
}

export default App;

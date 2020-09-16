import React, { Component } from 'react';

class Creatures extends Component {

    state = {
        newCreatureName: '',
        creatures: [
            'Unicorn',
            'Sphynx',
            'Kappa',
            'Dryad',
            'Jackalope'
        ]
    };

    //  add the stored creature name to our list
    onAddCreature = (event) => {
        //TODO: add creature to state
        console.log('new Creature name is', this.state.newCreatureName);
        //add to array
        // DOnt do this, will mutate state, doesnt work
        //this.state.creatures.push(this.state.newCreatureName);

        this.setState({
            newCreatureName: '',
            creatures: [
                ...this.state.creatures,
                this.state.newCreatureName
            ]
        });
    }

    // capture and store the new creature name
    // so we can use it later to add it to the list of creatures
    onChangeCreatureName = (event) => {
        this.setState({
            newCreatureName: event.target.value
        });
    }

    render() {
        // let creaturesListItems = [];
        // for (let creature of this.state.creatures) {
        //     creaturesListItems.push(
        //         <li>{creature}</li>
        //     );
        // }
        // // Using Array.forEach
        // let creaturesListItems = [];
        // this.state.creatures.forEach(creature => {
        //     creaturesListItems.push(
        //         <li>{creature}</li>
        //     );
        // });

        // Using Array.map()
        // let creaturesListItems = this.state.creatures.map(creature =>
        //     <li>{creature}</li>
        // );









        return (
            <div>
                <input
                    type="text"
                    placeholder="New Creature Name"
                    value={this.state.newCreatureName}
                    onChange={this.onChangeCreatureName}
                />
                <button onClick={this.onAddCreature}>Add Creature</button>
                <ul>
                    {/* set the key to the index of the item in the array (unique) */}
                    {this.state.creatures.map((creature, i) =>
                        <li key={i}>
                            <em>{creature}</em>
                            <button>Click Me!</button>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Creatures;
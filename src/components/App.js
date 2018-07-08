import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };
    addFish = fish => {
        // Two steps to update state
        // 1. Take a copy of the existing state.
        const fishes = {...this.state.fishes}
        // 2. Add our new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish;
        // 3. Set the new fishes object to state
        this.setState({
            fishes: fishes
        });
       console.log("Adding a fish!");
    };
    
    loadSampleFishes = () => {
        alert("This is an alert in the loadSampleFishes");
    };
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="I mean Matt is cool" age={500} cool={true}/>
                </div>
                <Order />
                <Inventory 
                    addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes}
                />
            </div>
        );
    }
}

export default App;
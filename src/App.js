import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    person: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'am a React App</h1>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <Person name={this.state.person[1].name} age={this.state.person[1].age}>
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age}
        />
      </div>
    );
  }
}
export default App;

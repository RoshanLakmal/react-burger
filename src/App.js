import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const app = props => {
  const [personsState, setPersonsState] = useState({
    person: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');
  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian'
    setPersonsState({
      person: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };
  return (
    <div className="App">
      <h1>Hi, I'am a React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.person[0].name}
        age={personsState.person[0].age}
      />
      <Person
        name={personsState.person[1].name}
        age={personsState.person[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.person[2].name}
        age={personsState.person[2].age}
      />
    </div>
  );
};
export default app;

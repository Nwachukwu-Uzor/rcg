import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'asssdr', name: 'Max', age: 28 },
      { id: "eeier", name: 'Manu', age: 29 },
      { id: 'ueiwhw', name: 'Stephanie', age: 26 }
    ],
    showPersons: false,
  }

  deletePersonHandler = ( personIndex) => {
    const personsList = [...this.state.persons]
    personsList.splice(personIndex, 1)
    this.setState({ persons: personsList })
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  }

  changeNameHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }
  render() {
     let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons  
            persons={this.state.persons} 
            clicked={this.deletePersonHandler}
            changed={this.changeNameHandler}
          />
      </div>
      )
    }
    return (
      <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons} 
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;

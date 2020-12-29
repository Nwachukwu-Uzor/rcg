import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../components/hoc/WithClass';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Constructor');
  }

  state = {
    persons: [
      { id: 'asssdr', name: 'Max', age: 28 },
      { id: "eeier", name: 'Manu', age: 29 },
      { id: 'ueiwhw', name: 'Stephanie', age: 26 }
    ],
    showPersons: false,
    showCockpit: true,
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount')
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate')
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
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

  hideCockpitHandler = () => {
    this.setState({showCockpit: !this.state.showCockpit})
  }
  
  render() {
    console.log('[App.js] render')
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

    const addRemove = this.state.showCockpit ? 'Remove' : 'Add';
    
    return (
      <WithClass classes={classes.App}>
        <button onClick={this.hideCockpitHandler}>{addRemove} Cockpit</button>
        {this.state.showCockpit ? 
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons} 
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />:
          null
      }
        {persons}
      </WithClass>
    );
  }
}

export default App;

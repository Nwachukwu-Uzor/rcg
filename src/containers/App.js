import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../components/hoc/withClass';
import Auxilliary from '../components/hoc/Auxilliary';
import AuthContext from '../context/auth-context';

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
    changeCounter: 0,
    authenticated: false
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

    this.setState((prevState, props) => {
      return { 
        persons: persons, 
        changeCounter: prevState.changeCounter + 1 
      }
    });
  }

  hideCockpitHandler = () => {
    this.setState((prevState) => {
      return {showPersons: !prevState.showPersons}
    })
  }

  loginHandler = () => {
    this.setState(prevState => {
      return {authenticated: !prevState.authenticated}
    })
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
            isAuthenticated={this.state.authenticated}
          />
      </div>
      )
    }

    const addRemove = this.state.showCockpit ? 'Remove' : 'Add';
    
    return (
      <Auxilliary>
        <button onClick={this.hideCockpitHandler}>{addRemove} Cockpit</button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? 
            <Cockpit 
              title={this.props.appTitle}
              showPersons={this.state.showPersons} 
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
              login={this.loginHandler}
              authStatus={this.state.authenticated}
            />:
            null
        }
        {persons}
      </AuthContext.Provider>
      </Auxilliary>
    );
  }
}

export default withClass(App, classes.App);

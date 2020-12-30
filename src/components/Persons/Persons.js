import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps', props);
    //     return state;
    // }

    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillReceiveProps', props)
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     return nextProps.persons !== this.props.persons 
    //         || 
    //     nextProps.changed !== this.props.changed 
    //         ||
    //     nextProps.clicked !== this.props.clicked
    //     ? true : false;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return {message: 'snapshot!'}
    }

    // componentWillUpdate() {

    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot)
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
    }

    render () {
        console.log('[Persons.js] rendering...')
        return  this.props.persons.map((person, index) => { 
            return ( 
                <Person 
                    key={person.id} 
                    name={person.name} 
                    age={person.age} 
                    changed={(event) => this.props.changed(event, person.id)}
                    clicked={() => this.props.clicked(index)}
                />
            )
        })
    }
}

export default Persons;
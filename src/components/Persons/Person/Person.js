import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.module.css';
import Auxilliary from '../../hoc/Auxilliary';
import withClass from '../../hoc/withClass'


class Person extends Component {
    render () {
        console.log('[Person.js] rendering...')
        return (
            <Auxilliary>
                <p onClick={this.props.clicked}>I am {this.props.name} and I am {this.props.age} years old!</p>
                <input type='text' onChange={this.props.changed} value={this.props.name}/> 
            </Auxilliary>
        )
    }
}

Person.propTypes = {
    clicked: PropTypes.func,
    changed: PropTypes.func,
    age: PropTypes.number,
    name: PropTypes.string
}

export default withClass(Person, classes.Person);
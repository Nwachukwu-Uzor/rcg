import React, { Component } from 'react';
// import classes from './Person.module.css';
import Auxilliary from '../../hoc/Auxilliary';

class Person extends Component {
    render () {
        console.log('[Person.js] rendering...')
        return (
            <Auxilliary>
                <p onClick={this.props.clicked}>I am {this.props.name}, I'm {this.props.age}</p>
                <input type='text' onChange={this.props.changed} value={this.props.name}/> 
            </Auxilliary>
        )
    }
}

export default Person;
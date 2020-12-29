import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.module.css';
import Auxilliary from '../../hoc/Auxilliary';
import withClass from '../../hoc/withClass'


class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef()
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render () {
        console.log('[Person.js] rendering...')
        return (
            <Auxilliary>
                <p onClick={this.props.clicked}>I am {this.props.name} and I am {this.props.age} years old!</p>
                <input 
                    type='text' 
                    onChange={this.props.changed} 
                    value={this.props.name}
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                /> 
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
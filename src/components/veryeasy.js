
import React, {Component } from 'react';



class Info extends Component {
    render () {
        return(
        <div>
            <h1>Personal Information</h1>
            <p>Name: {this.state.name}</p>
            <p>Number: {this.state.number}</p>
            <p>dateOfBirth: {this.state.dateOfBirth}</p>
        </div>
        );
    };
};

export default Info;
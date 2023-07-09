import React, { Component } from "react";
// MEDIUM Challenge part1
import VeryEasy from "./components/veryeasy";


class Easy extends Component {
    constructor(props) {
        super(props);
    
    this.state = { 
        // Medium part 2
        persons: [
        {
            Name: 'Jane',
            Number: '000-000-0000',
            dateOfBirth: '01/03/1991',
        },
        // HARD challenge part 1
        {
            Name: 'John',
            Number:'000-012-3455',
            dateOfBirth: '02/02/2000',
        },
        {
            Name: 'Mary',
            Number:'000-098-5467',
            dateOfBirth: '0715/1995',
        },
    ],
     };
}
    render() { 
        // Hard challenege part2
        const { persons } = this.state;
        return (  
            <>
            <h1>Person App</h1>
            {/* Medium challenge part2 */}
            {/* <VeryEasy persons = {this.state.person} /> <-- */}
            {/* hard part3 */}
            {persons.map((person, index) => (
                <VeryEasy key = {index} person = {persons} />
            ))}


            </>
        );
    }
}
 
export default Easy;
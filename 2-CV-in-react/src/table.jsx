import React from "react";
import { Component  } from "react";

class Qualification extends Component {
    constructor(props) {
        super(props); //pass props to the parent class constructor

        console.log("Qualification constructor called",this.props);
        

        this.state = { //here this.state is used to initialize state variables 
            startDate: this.props.startDate,
            endDate: this.props.endDate,
            institution: this.props.institution.toUpperCase()
        };
    }

    render() {
        return (
            <>
                {console.log("render called")}
                <p>
                    <td>{this.props.startDate}</td>
                    <td>{this.props.endDate}</td>
                    <td>{this.props.institution}</td>
                </p>
            </>
        );
    }
}

export default Qualification;
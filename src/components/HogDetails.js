import React, { Component } from "react";

class HogDetails extends Component {

    render(){
        console.log(this.props.pig)
        return(
            <div>
                <br></br><br></br>
                <button onClick={this.props.renderAll}>Back</button>
                <br></br><br></br>
                <h2>Name: {this.props.pig.name}</h2>
                <p>Specialty: {this.props.pig.specialty}</p>
                 <p>Weight: {this.props.pig.weight}</p>
                <p>Highest Medal Achieved: {this.props.pig['highest medal achieved']}</p>
            </div>
        )
    }
}

export default HogDetails
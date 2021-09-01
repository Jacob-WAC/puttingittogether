import React, { Component } from "react";

class Person extends Component {
    constructor(props) {
        super(props);

        this.state = {
            age: 55,
        };
    }
    birthday = () => {
        this.setState({ age: (this.state.age += 1) });
        console.log(this.state.age);
    };

    render() {
        return (
            <div>
                <p>age: {this.state.age}</p>

                <button onClick={this.birthday}>have a birthday!</button>
            </div>
        );
    }
}
export default Person;

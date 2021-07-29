import React from 'react';
import KeyCode from 'keycode-js';
// import KaseyCode from 'keycode-js';
// const KeyCode = require('keycode-js');
class InputBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || ''
        };
        // console.log(this.state.value);
        // console.log("This will run just any way")
    }
    handleChange(e) {
        this.setState({value: e.target.value});
        console.log(this.state.value)//to print the value of input as typed
    }
    // constructor(props) {
    //     this.setState({value:e.target.value});
    //     }
    

    handleKeyUp(e) {
        if (e.keyCode === KeyCode.KEY_RETURN) {
            // Add new Todo Here
            // Clear the text box
            // console.log(this.state.value)//to print the value of input
        }
    }

    render() {
        return (<input type="text"
            className="form-control add-todo"
            value={this.state.value}
            onKeyUp={this.handleKeyUp.bind(this)}
            onChange={this.handleChange.bind(this)}
            placeholder="Add New"/>);
    }
}

export default InputBox;
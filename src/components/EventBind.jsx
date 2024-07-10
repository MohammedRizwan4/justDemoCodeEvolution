import React, { Component } from 'react'

export default class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Hello"
        }
        
        // Method 3 - best when no argument
        this.changeMessage = this.changeMessage.bind(this)
    }

    // changeMessage() {
    //     console.log(this);
    //     this.setState({ message: "Bye Bye " })
    // }
    // Method 4 - best 
    changeMessage = () => {
        console.log(this);
        this.setState({ message: "Bye Bye " })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* this wont work, we need to bind this */}
                {/* Method 1 - not performance optimized*/}
                {/* <button onClick={this.changeMessage.bind(this)}>change</button> */}
                {/* Method 2 - when need to pass arguments */}
                {/* <button onClick={() => this.changeMessage()}>change</button> */}
                <button onClick={this.changeMessage}>change</button>
            </div>
        )
    }
}

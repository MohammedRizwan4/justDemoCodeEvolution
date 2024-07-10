import React, { Component } from 'react'
// conditional rendering example

export default class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        // Method 1 - basics if else - but not recommended
        //     if(this.state.isLoggedIn) {
        //         return <h1>Hello Rizwan</h1>
        //     }else {
        //         return <h1>Hello Guest</h1>
        //     }


        // Method 2 - using variable
        // let message;
        // if(this.state.isLoggedIn) {
        //     message = <h1>Hello Rizwan</h1>
        // }else {
        //     message = <h1>Hello Guest</h1>
        // }

        // return message

        // Method 3 - using ternary operator
        // return this.state.isLoggedIn ? <h1>Hello Rizwan</h1> : <h1>Hello Guest</h1>


        // Method 4 - using Short-circuit operator
        // return this.state.isLoggedIn && <h1>Hello Rizwan</h1>
    }
}

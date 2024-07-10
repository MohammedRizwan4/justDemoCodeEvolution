import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {

        // this is an asynchoronous code, so it will run after console.log
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log('Callback :- ' + this.state.count);
        // })



        //  code for calling it 5 times in single click, so take prev value and update
        // here () is for object literal return, so it wont confuse between function {} and object {}
        this.setState((prev) => ({ count: prev.count + 1 }), () => { console.log('Callback - ' + this.state.count) })


        // dont do update like this, it wont re render component
        // this.state.count = this.state.count + 1;



        // this console log is scynronous code, thats why it print old value after re rendering also
        console.log(this.state.count);
        // to render console log with new value, pass callback to setState method
    }

    incrementFive() {
        // here when we call five time so, we pass object in setState so it will optimize it 
        // thats why it runs only one time
        // if want then take prev value and then update, so it will work fine
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <h1>Counter :- {this.state.count}</h1>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

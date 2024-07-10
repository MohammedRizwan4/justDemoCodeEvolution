import React, { Component } from 'react'

export default class RefDemos_Method2 extends Component {
    constructor(props) {
        super(props)

        // using callbacks and it dont have current object
        this.inputRef = null
        this.inputRefCb = element => {
            this.inputRef = element;
        }
    }

    componentDidMount() {
        // it dont have current object
        this.inputRef.focus();
    }

    handleClick = () => {
        alert(this.inputRef.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRefCb} />
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

export default class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        console.log("LifeCyle A constructor");
        this.state = {
            message: 'Anna'
        }
    }

    static getDerivedStateFromProps(state, props) {
        console.log("LifeCyle A getDerivedStateFromProps");
        // compulsory to return object of state and props or null
        return null;
    }

    componentDidMount() {
        // after whole component and its child loaded then run
        // best for AJAX calls
        console.log("LifeCyle A componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("LifeCyle A shouldComponentUpdate");
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCyle A getSnapshotBeforeUpdate");
        return null
    }

    componentDidUpdate() {
        console.log("LifeCyle A componentDidUpdate");
    }

    render() {
        console.log("LifeCyle A render");
        return (
            <div>
                <LifeCycleB /> {/* here see the differnce how mounting happens when child componenet are there */}
                <button onClick={() => this.setState({ message: "Hello" })}>Change State</button>
            </div>
        )
    }
}

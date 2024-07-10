import React, { Component } from 'react'

export default class LifeCycleB extends Component {
    constructor(props) {
        super(props)

        console.log("LifeCyle B constructor");
        this.state = {
            message: 'Anna'
        }
    }
    
    static getDerivedStateFromProps(state, props) {
        console.log("LifeCyle B getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("LifeCyle B componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("LifeCyle B shouldComponentUpdate");
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCyle B getSnapshotBeforeUpdate");
        return null
    }

    componentDidUpdate() {
        console.log("LifeCyle B componentDidUpdate");
    }

    render() {
        console.log("LifeCyle B render");
        return (
            <div>
                
            </div>
        )
    }
}

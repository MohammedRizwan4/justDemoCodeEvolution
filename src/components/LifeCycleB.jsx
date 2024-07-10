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

    render() {
        console.log("LifeCyle B render");
        return (
            <div>
                
            </div>
        )
    }
}

import React, { Component } from 'react'
import ReactMemo from './ReactMemo'

export default class Parent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'rizwan'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "rizwan"
            })
        }, 2000)
    }

    render() {
        console.log("***********************************Parent Component");
        return (
            <div>
                <ReactMemo name={this.state.name} />
            </div>
        )
    }
}

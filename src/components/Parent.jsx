import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

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
                <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}

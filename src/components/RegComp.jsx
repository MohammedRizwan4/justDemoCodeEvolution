import React, { Component } from 'react'

export default class RegComp extends Component {
    render() {
        console.log("Regular Component");
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}

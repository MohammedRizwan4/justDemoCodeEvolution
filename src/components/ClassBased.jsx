import React, { Component } from "react";

class ClassBased extends Component {
    render() {
        return (
            <h1>
                {this.props.name} a.k.a {this.props.address}
            </h1>
        )
    }
}

export default ClassBased
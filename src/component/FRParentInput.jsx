import React, { Component } from 'react'
import FRInput from './FRInput';

export default class FRParentInput extends Component {
    constructor(props) {
        super(props)

        this.frRef = React.createRef();
    }

    handleClick = () => {
        this.frRef.current.focus();
    }

    render() {
        return (
            <div>
                <FRInput ref={this.frRef} />
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

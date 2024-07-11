import React, { Component } from "react";

const withCounter = (WrappedComponent, inrmnt) => {
    // New component
    class WithCounter extends Component {

        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + inrmnt }
            })
        }

        render() {
            return <WrappedComponent {...this.props} count={this.state.count} incrementCount={this.incrementCount} />
        }
    }

    return WithCounter
}

export default withCounter
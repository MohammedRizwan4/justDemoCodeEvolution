import React, { Component } from 'react'

export default class ClassUseEffect extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            message: '',
            X: 0,
            Y: 0
        }
    }

    handleMouseOver = (e) => {
        console.log("Mouse event");
        this.setState({ X: e.clientX, Y: e.clientY })
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.handleMouseOver)
        document.title = `Clicked ${this.state.count} times`
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseOver)
        console.log("Component will unmounting");
    }

    componentDidUpdate(prevProps, prevState) {
        // will only be called when state change
        if (prevState.count !== this.state.count) {
            document.title = `Clicked ${this.state.count} times`
            console.log('component did update');
        }
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.message} onChange={(e) => this.setState({ message: e.target.value })} />
                X - {this.state.X} and Y - {this.state.Y}
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>You Clicked {this.state.count} times</button>
            </div>
        )
    }
}

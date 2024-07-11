import React, { Component } from 'react'
import Hero from './Hero'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something Went wrong</h1>
        } else {
            return this.props.children
        }
    }
}

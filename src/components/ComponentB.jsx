import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from './userContext'

export default class ComponentB extends Component {
    // alternate way but here we can only use, one single context in class
    // and it will be only availabe in class based component
    static contextType = UserContext
    render() {
        return (
            <h3>
                Component B context = {this.context.name} and  {this.context.age}
                <ComponentC />
            </h3>
        )
    }
}

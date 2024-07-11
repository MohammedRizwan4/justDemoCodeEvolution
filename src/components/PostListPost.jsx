import axios from 'axios';
import React, { Component } from 'react'

export default class PostListPost extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
        .then(response => {
            console.log(response)
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" name='userId' onChange={this.handleChange} />
                    <input type="text" name='title' onChange={this.handleChange} />
                    <input type="text" name='body' onChange={this.handleChange} />
                    <button type='submit'>Submit</button>
                </div>
            </form>
        )
    }
}

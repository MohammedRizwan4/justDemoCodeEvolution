import axios from 'axios'
import React, { Component } from 'react'

export default class PostListGet extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                console.log(response.data);
                this.setState({
                    posts: response.data
                })
            }).catch(error => {
                console.log(error);
            })
    }
    render() {
        const { posts } = this.state
        return (
            <div>
                {
                    posts.map(post => <div key={post.id}>{post.title}</div>)
                }
            </div>
        )
    }
}

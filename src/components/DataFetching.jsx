import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DataFetching = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => setPosts(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            {
                posts.map((post) => <div key={post.id}>{post.title}</div>)
            }
        </div>
    )
}

export default DataFetching


import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DataFetchingSingle = () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setPost(res.data)
            })
            .catch(err => console.log(err))
    }, [id])

    useEffect(() => {
        console.log(post)
    }, [post])

    return (
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            {
                post.title ? post.title : 'Title is undefined'
            }
        </div>
    )
}

export default DataFetchingSingle


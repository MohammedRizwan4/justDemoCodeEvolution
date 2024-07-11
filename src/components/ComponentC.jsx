import React from 'react'
import { UserConsumer } from './userContext'

const ComponentC = () => {
    return (
        <UserConsumer>
            {
                (info) => {
                    return <h1>{info.name} - {info.age}</h1>
                }
            }
        </UserConsumer>
    )
}

export default ComponentC

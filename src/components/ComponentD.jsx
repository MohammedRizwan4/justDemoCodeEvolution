import React, { useContext } from 'react'
import { UserContext, AdminContext } from '../App'

const ComponentD = () => {
    // just give it context and it will return value
    const user = useContext(UserContext)
    const admin = useContext(AdminContext)
    return (
        <h1>
            {user} - {admin}
        </h1>
    )
}

export default ComponentD

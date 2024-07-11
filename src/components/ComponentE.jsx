import React from 'react'
import { UserContext, AdminContext } from '../App'

// i am just creating single component but for example
const ComponentE = () => {
    return (
        <div>
            {/* This is very tedious to consume */}
            <UserContext.Consumer>
                {
                    (name) => {
                        return <AdminContext >
                            {
                                (admin) => {
                                    return <h1>{name} and {admin}</h1>
                                }
                            }
                        </AdminContext>
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentE

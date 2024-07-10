import React from 'react'

// children word will be same always
function Props({ name, children, address }) {
    return (
        <div>
            <div>Your name is {name} and your city is {address}</div>
            {children}
        </div>
    )
}

export default Props
import React, { useContext } from 'react'
import { CountContext } from '../App'

const ComponentB = () => {
    const { countState, countDispatch } = useContext(CountContext)
    return (
        <div>
            <div>Component B - {countState}</div>
            <button onClick={() => countDispatch('increment')}>Increment</button>
            <button onClick={() => countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentB

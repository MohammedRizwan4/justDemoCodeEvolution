import React from 'react'
import { useReducer } from 'react'

const initialState = 0
// the callback has first accum, here it is state and second is current value, here it current action
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return 0;
        default:
            return state;
    }
}

const CounterOne = () => {

    // same in JS reduce method take reducer function and accumulator which is initalValue
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterOne

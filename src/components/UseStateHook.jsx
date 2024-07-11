import React, { useState } from 'react'

const UseStateHook = () => {

    const [count, setCount] = useState(0);
    const [arr, setArr] = useState([]);
    const [obj, setObj] = useState({ firstName: '', lastName: '' });

    const incrementFive = () => {
        for (let index = 0; index < 5; index++) {
            // this won't work, because it optimized to one update only
            // setCount(count + 1)

            setCount(prev => prev + 1)
        }
    }

    return (
        <div>
            <button onClick={() => incrementFive()}>Click {count}</button>
            {/* Alternate Option - good */}
            {/* <button onClick={() => setArr(prev => [...prev, {
                id: prev.length,
                value: Math.floor(Math.random() * 10) + 1
            }])}>Add in arr</button> */}
            <button onClick={() => setArr([...arr, {
                id: arr.length,
                value: Math.floor(Math.random() * 10) + 1
            }])}>Add in arr</button>
            <h1>{JSON.stringify(arr)}</h1>

            <form>
                <input type="text" value={obj.firstName} onChange={(e) => setObj({ ...obj, firstName: e.target.value })} />
                <input type="text" value={obj.lastName} onChange={(e) => setObj({ ...obj, lastName: e.target.value })} />
                <h1>{JSON.stringify(obj)}</h1>
            </form>
            <h1></h1>
        </div>
    )
}

export default UseStateHook

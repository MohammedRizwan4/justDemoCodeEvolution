import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(() => {
        document.title = `Clicked ${count} times`
        console.log('component did update');
        // only when the count change it will change
    }, [count])

    const handleMouseOver = (e) => {
        console.log("Mouse event");
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("useState logging");
        window.addEventListener("mousemove", handleMouseOver)

        // clean up to remove evenlistners when unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseOver)
        }
    }, [])

    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <div>X - {x} and Y - {y}</div>
            <button onClick={() => setCount(count + 1)}>You Clicked {count} times</button>
        </div>
    )
}

export default UseEffectHook

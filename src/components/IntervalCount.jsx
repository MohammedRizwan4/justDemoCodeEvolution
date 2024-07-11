import React, { useEffect, useState } from 'react'

const IntervalCount = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            // this wont work, in starting it will take 0 and register it 
            // setCount(count + 1)

            // here we have set prev value otherwise the interval callback have only one value
            setCount(prevCount => prevCount + 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalCount

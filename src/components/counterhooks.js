import React, {useState} from 'react'

const CounterHook = () => {
    const [number, setNumber] = useState(0)

    const handleIncrementClick = () => {
        setNumber(number + 1)
    }
    const handleDecrementClick = () => {
        setNumber(number - 1)
    }

    return (
        <div>
            <h1>Counter with Hooks</h1>
            <button onClick = {handleIncrementClick}>Increment</button>
            <h1>{number}</h1>
            <button onClick = {handleDecrementClick}>Decrement</button>
        </div>    
    )
}

export default CounterHook
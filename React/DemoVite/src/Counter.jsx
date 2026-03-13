import React from 'react'
import useCounter from './Hooks/useCounter'

function Counter() {

    const { count, incrment, decrment, reset } = useCounter(1)

    return (
        <div>
            <h1>Hello this Custom hooks</h1>
            <h1>Count : {count}</h1>
            <button onClick={incrment} className='btn'>+</button>
            <button onClick={decrment} className='btn'>-</button>
            <button onClick={reset} className='btn'>0</button>
        </div>
    )
}

export default Counter

import React, { useState } from 'react'

function useCounter(initialState) {

    const [count, setcount] = useState(initialState)

    const incrment = () => {
        setcount(count + 1)
    }
    const decrment = () => {
        setcount(count - 1)
    }
    const reset =()=>{
        setcount(0)
    }

    return {incrment,decrment,reset,count}

}

export default useCounter

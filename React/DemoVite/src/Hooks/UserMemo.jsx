import React, { useMemo, useState } from 'react'

function UserMemo() {

    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const result = useMemo(() => {
        console.log("Calculating...");
        for (let i = 0; i < 1000000000; i++) { }
        return number * 2;
    }, [number]);

    return (
        <div>
            <h2>Result: {result}</h2>

            <button className='btn' onClick={() => setCount(count + 1)}>
                Count {count}
            </button>

            <input
                type="number"
                onChange={(e) => setNumber(e.target.value)}
            />
        </div>
    )
}

export default UserMemo

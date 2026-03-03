import React, { useState } from 'react'
import B from './B'

function A() {

    const [name, setname] = useState("Shubham jadav")

    return (
        <div>
            <h1>Hello This A Compo</h1>
            <h2>Hello A : {name}</h2>
            <B name={name} setname={setname} />
        </div>
    )
}

export default A

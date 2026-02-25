// jsx : javascript syntax xml
// jsx : html return suggestion read
// jsx vs js : 0.2 s fast
// jsx : {varibale allow}
// jsx : class , className

import React from 'react'

function Hello() {

    // console.log("hello")
    let name = "manthan"
    console.log(name)

    let htmldata = <ul>
        <li>Home</li>
        <li>About</li>
        <li>contact</li>
    </ul>

    return (
        <>
            <h1>Hello this Jsx Data</h1>
            <h2>name : {name}</h2>

            {htmldata}

            {5 + 10}

            <h1 className=''>Hello this class</h1>


        </>
    )
}

export default Hello

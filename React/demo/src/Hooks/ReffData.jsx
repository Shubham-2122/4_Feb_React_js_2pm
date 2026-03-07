// real Dom direct
// useRef Re-render Stop it


import React, { useRef } from 'react'
import Header from '../Layout/Comana/Header'

function ReffData() {

    const refelement = useRef()
    
    const demo=()=>{
        refelement.current.focus();
    }

    const demo2=()=>{
        refelement.current.style.background = "red";
        refelement.current.style.color = "white";
    }

  return (
    <div>
      <Header />
      <h1>Hello This Use Reff data</h1>

        <input ref={refelement} type="text" placeholder='Enter your name' />

        <button onClick={demo}>Check data</button>

        <button onClick={demo2}>Style data</button>
    </div>
  )
}

export default ReffData

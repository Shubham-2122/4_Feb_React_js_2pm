// useEffect : function side effect : 
// compenent : re-reder 
// useEffect : Compeonet data show , api data url data show ,navgation
// useEffect : first parameter logic call,second option [],[data],

import React, { useEffect, useState } from 'react'

function EffectData() {

    const [name,setname] = useState("shubham")

    // 1) no arry data object
    // useEffect(()=>{
    //     console.log("outside function call")
    //     return(()=>{
    //         console.log("Inside Function call")
    //     })
    // },)

    // 2) array blank 
    //  useEffect(()=>{
    //     console.log("outside function call")
    //     return(()=>{
    //         console.log("Inside Function call")
    //     })
    // },[])

    // 3) state optional array
     useEffect(()=>{
        console.log("outside function call")
        return(()=>{
            console.log("Inside Function call")
        })
    },[name])

  return (
    <div>
      <h1>Hello this UseEffect side function</h1>

    <h1>Name : {name}</h1>
    <button onClick={()=>setname("Manthan")}>Change name</button>

    </div>
  )
}

export default EffectData

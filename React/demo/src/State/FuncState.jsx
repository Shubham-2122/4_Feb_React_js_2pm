// React 16.8 : Hooks 
// Hooks : Reuse, res 
// 1) useState import 
//  return outside 
// const [state,setstate] = useState(initinal value)

import React, { useState } from 'react'
import ImageCompo from './ImageCompo'

function FuncState() {

    // type [defined,setdefined] = useState(ininitial value)
    const [name,setname] = useState("Shubham jadav")
    const [count,setcount] = useState(0)
    const [isImage,setisimage] = useState(true)
    
    // console.log(name)

    const changedata=()=>{
        setname("jiger sir")
    }

  return (
    <div>
      <h1>Name : {name}</h1>
      <button onClick={()=>setname("manthan")}>Change name</button>
      <button onClick={()=>setname("tanay")}>Change name 2</button>
      <button onClick={changedata}>Chaneg name fun</button>


      <h1>Count : {count}</h1>

    <button onClick={()=>setcount(count + 1)}>Increment</button>
    <button onClick={()=>setcount(count - 1)}>Decrement</button>
    <button onClick={()=>setcount(0)}>Zero</button>

    <br /> <br />
    <button onClick={()=>setisimage(false)}>Hide</button>
    <button onClick={()=>setisimage(true)}>Show</button>
    <button onClick={()=>setisimage(!isImage)}>Toggle</button>

    <hr />
    {
        (isImage)?<ImageCompo /> : `<p>no images</p>`
    }

    </div>
  )
}

export default FuncState

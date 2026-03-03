import React, { createContext, useState } from 'react'
import ChildD from './ChildD';
import ChildB from './ChildB';
import ChildC from './ChildC';

export const data = createContext(); 


function ChildA() {

    const [name,setname] = useState("manthan")
    const [form,setform] = useState({
        name : "sujal",
        count : 0
    })

    // console.log(data)
  return (
    <div>
      <h1>Hello A Compo Child</h1>
      <h1>A: {name}</h1>

    {/* 2) provide data value as object */}
      <data.Provider value={{name,setname,form,setform}} >
        <ChildB />
        <ChildC />
        <ChildD />
      </data.Provider>
    </div>
  )
}

export default ChildA

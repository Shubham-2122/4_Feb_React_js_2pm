import React, { useContext } from 'react'
import { data } from './ChildA'

function ChildD() {

    const {name,setname} = useContext(data)

  return (
    <div>
      <h1>Hello D Compo Child</h1>
      <h1>D : {name}</h1>

      <button onClick={()=>setname("shubham jadav")}>Change name </button>
    </div>
  )
}

export default ChildD

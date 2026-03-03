import React from 'react'

function D({name,setname}) {
  return (
    <div>
      <h1>Hello This D Compo</h1>
      <h2>Hello D : {name}</h2>

      <button onClick={()=>setname("Manthan")}>Change name</button>
    </div>
  )
}

export default D

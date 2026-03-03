import React from 'react'
import C from './C'

function B({name,setname}) {
  return (
    <div>
      <h1>Hello This B Compo</h1>
      <h3>Hello B : {name}</h3>

      <C name={name} setname={setname} />
    </div>
  )
}

export default B

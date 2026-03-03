import React, { useContext } from 'react'
import { data } from './ChildA'

function ChildB() {

    const demo = useContext(data)

    const {form,setform} = demo;

  return (
    <div>
      <h1>Hello B Compo Child</h1>
      <h1>B Name : {form.name}</h1>
      <button onClick={()=>setform({...form,name:"jigar sir"})}>Change name</button>

      <h1>B Count : {form.count}</h1>

      <button onClick={()=>setform({...form,count : form.count + 1})}>increment</button>
    </div>
  )
}

export default ChildB

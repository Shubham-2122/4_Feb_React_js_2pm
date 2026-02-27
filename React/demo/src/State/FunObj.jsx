import React, { useState } from 'react'

function FunObj() {

    const [data,setdata] = useState({
        name : "mathan",
        count : 1,
        isImage : true
    })

    // console.log(data)

    const inrement2=()=>{
        setdata({
            ...data,
            count : data.count + 2
        })
    }

  return (
    <div>
      <h1>name : {data.name}</h1>
      <button onClick={()=>setdata({...data,name:"shubham jadav"})}>Chanage name</button>
       <button onClick={()=>setdata({...data,name:"sujal jadav"})}>Chanage name 2</button>

       <h1>Counting : {data.count}</h1>
       <button onClick={()=>setdata({...data,count : data.count + 1})}>Increment</button>
       <button onClick={()=>setdata({...data,count : data.count - 2})}>Decrement</button>
       <button onClick={inrement2}>inc + 2</button>
       <button onClick={()=>setdata({...data,count : 0})}>Zero</button>
    </div>
  )
}

export default FunObj

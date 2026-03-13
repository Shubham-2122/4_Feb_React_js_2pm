// useState : 
// useReducer : complex state manage , reuse,reduce

import React, { useReducer } from 'react'

const initialState = 0

export const reducer=(state,action)=>{
    switch (action) {
        case 'increment':
            // return state = state + 1
            return state += 1;
            break;
         case 'decrement':
            return state -= 1;
            break;
         case 'zero':
            return state = 0;
            break;
        default:
            return initialState
            break;
    }
    // if(action.type == "incrment"){
    //     return state += 1
    // }
    // // else if()
}


function RedcerData() {

    const [count,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
      <h1>Hello this data</h1>
      <h1>count : {count}</h1>
      <button className='btn' onClick={()=>dispatch('increment')}>+</button>
       <button className='btn' onClick={()=>dispatch('decrement')}>-</button>
       <button className='btn' onClick={()=>dispatch('zero')}>reset</button>
    </div>
  )
}

export default RedcerData

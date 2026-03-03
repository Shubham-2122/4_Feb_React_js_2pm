import React from 'react'
import ChildA from './UseContext/ChildA'
// import A from './Props_drilling/A'

function MainContext() {
  return (
    <div>
      <h1>hello this Context data</h1>

        {/* props driiling A - B - C -D - E */}
        {/* <A /> */}

    {/* useConxt */}
    {/* 1) created context  */}
        <ChildA />

    </div>
  )
}

export default MainContext

import React from 'react'

function Font() {
  return (
    <div>
      <h1 className='text-cyan-300 font-sans'>Hello data</h1>
      <h1 className='text-xl text-end font-serif'>Hello data</h1>
      <h1 className='text-2xl decoration-0 underline decoration-double font-mono'>Hello data</h1>
      <h1 className='text-3xl italic font-medium'>Hello data</h1>
      <h1 className='text-4xl overline uppercase decoration-4 decoration-dotted decoration-amber-300 text-center font-black'>Hello data</h1>
      <h1 className='text-5xl text-right'>Hello data</h1>
      <h1 className='text-6xl text-center lowercase decoration-2 decoration-dashed line-through decoration-sky-400'>Hello data</h1>
      <h1 className='text-7xl bg-gradient-to-r from-sky-400 to-green-500 capitalize text-left'>Hello data</h1>
       <h1 className='text-9xl bg-gradient-to-r text-center from-sky-400 font-black text-transparent bg-clip-text via-red-400 via-25% to-green-500 capitalize'>Hello data</h1>

      <ul className=' p-7 list-decimal'>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
       <ul className=' p-7 list-disc'>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
      
    </div>
  )
}

export default Font

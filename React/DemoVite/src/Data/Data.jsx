import React from 'react'

function Data() {
  return (
    <div>
        <div className="sm:flex">
            <div className="sm:w-1/2 md:bg-amber-300  border-2">1</div>
            <div className="sm:w-1/2 xl:bg-green-400 border-2">2</div>
        </div>
         <div className="md:flex">
            <div className="md:w-1/3 hover:bg-blue-300 hover:text-4xl  border-2">1</div>
            <div className="md:w-1/3 border-2 hover:bg-amber-400">2</div>
            <div className="md:w-1/3 border-2 bg-[rgba(110,238,71,0.82)] text-[40px]">2</div>
        </div>

        <h1 className=''>Hello this h1 here</h1>
        <button className='btn'>Hello</button>

        <button className='btn'>Data</button>

        <button className='btn1'>add</button>
        
       <div className="flex">
         <div id='card'>1</div>
        <div id='card'>1</div>
        <div id='card'>1</div>

       </div>
       <p className='font'>Hello this data</p>
       <p className='data p-10 padd border-2 ' >Hello this data</p>
       <p>Hello this data</p>

    </div>
  )
}

export default Data

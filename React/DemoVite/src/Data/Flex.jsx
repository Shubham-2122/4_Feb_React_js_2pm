import React from 'react'

function Flex() {
    return (
        <div>

            <div className="flex flex-wrap justify-center gap-7">
                <div className='w-52 h-52 border-2'>
                    <img className='blur-sm cursor-pointer' style={{height:"100%",width:"100%"}} src="https://images.pexels.com/photos/355321/pexels-photo-355321.jpeg?_gl=1*1pturor*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NzMxMjQ4NTgkbzY4JGcxJHQxNzczMTI0ODY0JGo1NCRsMCRoMA.." alt="" />
                </div>
                <div className="size-52 border-2">
                    <img className='brightness-200 cursor-wait' style={{height:"100%",width:"100%"}} src="https://images.pexels.com/photos/355321/pexels-photo-355321.jpeg?_gl=1*1pturor*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NzMxMjQ4NTgkbzY4JGcxJHQxNzczMTI0ODY0JGo1NCRsMCRoMA.." alt="" />
                </div>
                <div className="size-52 border-2">
                    <img className='contrast-200' style={{height:"100%",width:"100%"}} src="https://images.pexels.com/photos/355321/pexels-photo-355321.jpeg?_gl=1*1pturor*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NzMxMjQ4NTgkbzY4JGcxJHQxNzczMTI0ODY0JGo1NCRsMCRoMA.." alt="" />
                </div>
                <div className='w-52 h-52 border-2'>
                    <img className='grayscale' style={{height:"100%",width:"100%"}} src="https://images.pexels.com/photos/355321/pexels-photo-355321.jpeg?_gl=1*1pturor*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NzMxMjQ4NTgkbzY4JGcxJHQxNzczMTI0ODY0JGo1NCRsMCRoMA.." alt="" />
                </div>
                <div className="size-52 border-2">
                    <img className='hue-rotate-270' style={{height:"100%",width:"100%"}} src="https://images.pexels.com/photos/355321/pexels-photo-355321.jpeg?_gl=1*1pturor*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NzMxMjQ4NTgkbzY4JGcxJHQxNzczMTI0ODY0JGo1NCRsMCRoMA.." alt="" />
                </div>
                <div className="size-52 border-2">
                    <img className='sepia' style={{height:"100%",width:"100%"}} src="https://images.pexels.com/photos/355321/pexels-photo-355321.jpeg?_gl=1*1pturor*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NzMxMjQ4NTgkbzY4JGcxJHQxNzczMTI0ODY0JGo1NCRsMCRoMA.." alt="" />
                </div>
                <div className='w-52 h-52 border-2'>
                    <img style={{height:"100%",width:"100%"}} src="https://images.pexels.com/photos/355321/pexels-photo-355321.jpeg?_gl=1*1pturor*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NzMxMjQ4NTgkbzY4JGcxJHQxNzczMTI0ODY0JGo1NCRsMCRoMA.." alt="" />
                </div>
                <div className="size-52 border-2">
                    <img style={{height:"100%",width:"100%"}} src="https://images.pexels.com/photos/355321/pexels-photo-355321.jpeg?_gl=1*1pturor*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NzMxMjQ4NTgkbzY4JGcxJHQxNzczMTI0ODY0JGo1NCRsMCRoMA.." alt="" />
                </div>
                <div className="size-52 border-2 translate-4" >3</div>
                <div className='w-52 h-52 border-2 scale-75'>1</div>
                <div className="size-52 border-2 scale-125">2</div>
                <div className="size-52 border-2 rotate-45">3</div>
                <div className='w-52 h-52 border-2 skew-12'>1</div>
                <div className="size-52 border-2">2</div>
                <div className="size-52 border-2">3</div>
                <div className='w-52 h-52 border-2'>1</div>
                <div className="size-52 border-2">2</div>
                <div className="size-52 border-2">3</div>
            </div>

            {/* <div className="flex">
                <div className='w-1/2 border-2'>1</div>
                <div className='w-1/2 border-2'>2</div>
            </div> */}

            {/* <div className="flex justify-center">
                <div className='w-52 h-52 border-2'>1</div>
                <div className="size-52 border-2">2</div>
                <div className="size-52 border-2">3</div>
            </div>
             <div className="flex justify-end">
                <div className='w-52 h-52 border-2'>1</div>
                <div className="size-52 border-2">2</div>
                <div className="size-52 border-2">3</div>
            </div>

             <div className="flex flex-row-reverse">
                <div className='w-52 h-52 border-2'>1</div>
                <div className="size-52 border-2">2</div>
                <div className="size-52 border-2">3</div>
            </div>
             <div className="flex flex-col">
                <div className='w-52 h-52 border-2'>1</div>
                <div className="size-52 border-2">2</div>
                <div className="size-52 border-2">3</div>
            </div>
              <div className="flex justify-between">
                <div className='w-52 h-52 border-2'>1</div>
                <div className="size-52 border-2">2</div>
                <div className="size-52 border-2">3</div>
            </div>
             <div className="flex justify-around">
                <div className='w-52 h-52 border-2'>1</div>
                <div className="size-52 border-2">2</div>
                <div className="size-52 border-2">3</div>
            </div>

             <div className="flex bg-amber-400 h-96 justify-center items-center">
                <div className='w-52 h-52 border-2'>1</div>
                <div className="size-52 border-2 self-start">2</div>
                <div className="size-52 border-2">3</div>
            </div> */}


            {/* <div className="grid grid-cols-3 gap-2">
                <div className='border-2 col-span-2'>1</div>
                <div className='border-2'>2</div>
                <div className='border-2'>3</div>
                <div className='border-2 row-span-2'>4</div>
                <div className='border-2'>5</div>
                <div className='border-2'>6</div>
                <div className='border-2'>7</div>
                <div className='border-2'>8</div>
                <div className='border-2'>9</div>
                <div className='border-2'>10</div>
            </div> */}

             {/* <div className="grid grid-flow-col grid-rows-5">
                <div className='border-2'>1</div>
                <div className='border-2'>1</div>
                <div className='border-2'>1</div>
                <div className='border-2'>1</div>
                <div className='border-2'>1</div>
                <div className='border-2'>1</div>
                <div className='border-2'>1</div>
                <div className='border-2'>1</div>
                <div className='border-2'>1</div>
            </div> */}

        </div>
    )
}

export default Flex

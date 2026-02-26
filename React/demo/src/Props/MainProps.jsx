// props : Props it is property 
// props : parameter data show 
// props : one compoenent anohter component data pass 
// props : read only we can not change data
// props :  class and function

import React from 'react'
import Classprops from './Classprops'
import FuncProps from './FuncProps'

function MainProps() {
    return (
        <div>
            <h1>hello this Props data</h1>
            <div className="container">
                <h1>Class Props data</h1>
                <div className="row">
                    <Classprops title="Hello Car" desc="Hello this card data here" img="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?_gl=1*59uwk3*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NzIwODY2MjYkbzY0JGcxJHQxNzcyMDg2NjI5JGo1NyRsMCRoMA.." />
                    <Classprops title="Hello Car2" desc="Hello this card data here" img="https://images.pexels.com/photos/831475/pexels-photo-831475.jpeg?_gl=1*59uwk3*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NzIwODY2MjYkbzY0JGcxJHQxNzcyMDg2NjI5JGo1NyRsMCRoMA.." />
                    <Classprops title="Hello Car3" desc="Hello this card data here" img="https://images.pexels.com/photos/755298/pexels-photo-755298.jpeg?_gl=1*59uwk3*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NzIwODY2MjYkbzY0JGcxJHQxNzcyMDg2NjI5JGo1NyRsMCRoMA.." />
                    <Classprops title="Hello Car" desc="Hello this card data here" img="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?_gl=1*59uwk3*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NzIwODY2MjYkbzY0JGcxJHQxNzcyMDg2NjI5JGo1NyRsMCRoMA.." />
                    <Classprops title="Hello Car2" desc="Hello this card data here" img="https://images.pexels.com/photos/831475/pexels-photo-831475.jpeg?_gl=1*59uwk3*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NzIwODY2MjYkbzY0JGcxJHQxNzcyMDg2NjI5JGo1NyRsMCRoMA.." />
                    <Classprops title="Hello Car3" desc="Hello this card data here" img="https://images.pexels.com/photos/755298/pexels-photo-755298.jpeg?_gl=1*59uwk3*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NzIwODY2MjYkbzY0JGcxJHQxNzcyMDg2NjI5JGo1NyRsMCRoMA.." />
                </div>
            </div>

            <div className="container">
                <h1>Function Props</h1>
                <div className="row">
                    <FuncProps title="Hello car" desc="Card 1 images here" img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?_gl=1*t87dez*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NzIwODY2MjYkbzY0JGcxJHQxNzcyMDg3MDQ1JGo1MyRsMCRoMA.." />
                    <FuncProps title="hello car1" desc="Card 1 images here" img="https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg?_gl=1*t87dez*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NzIwODY2MjYkbzY0JGcxJHQxNzcyMDg3MDQ1JGo1MyRsMCRoMA.." />
                    <FuncProps title="Hello car" desc="Card 1 images here" img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?_gl=1*t87dez*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NzIwODY2MjYkbzY0JGcxJHQxNzcyMDg3MDQ1JGo1MyRsMCRoMA.." />
                    <FuncProps title="hello car1" desc="Card 1 images here" img="https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg?_gl=1*t87dez*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NzIwODY2MjYkbzY0JGcxJHQxNzcyMDg3MDQ1JGo1MyRsMCRoMA.." />
                    <FuncProps title="Hello car" desc="Card 1 images here" img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?_gl=1*t87dez*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NzIwODY2MjYkbzY0JGcxJHQxNzcyMDg3MDQ1JGo1MyRsMCRoMA.." />
                    <FuncProps title="hello car1" desc="Card 1 images here" img="https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg?_gl=1*t87dez*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NzIwODY2MjYkbzY0JGcxJHQxNzcyMDg3MDQ1JGo1MyRsMCRoMA.." />

                </div>
            </div>
        </div>
    )
}

export default MainProps

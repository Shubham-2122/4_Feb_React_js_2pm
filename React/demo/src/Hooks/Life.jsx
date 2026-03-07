import React, { Component } from 'react'
import Header from '../Layout/Comana/Header'

// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

class Life extends Component {
    constructor(){
        super();
        this.state = {
            name : "Shubham jadav"
        }
    }

    // 1) mouting phase : intianl state
    componentDidMount(){
        console.log("Hello this Mouting Phase")
    }

    // before check data true and false
    // shouldComponentUpdate(){
    //     console.log("before Update Check it")
    // }

    // 2) Update Phase
    componentDidUpdate(){
        console.log("Hello this Update Phase")
    }

    componentWillUnmount(){
        console.log("Hello this UnMouting Phase...")
    }

    render() {
        console.log(this.state.name)
        return (
            <div>
                <Header />
                <h1>Hello this Life Cycle Method</h1>

                {/* 1) Class Method LifeCycle */}
                1. Mouting : initial state / props
                2. Update : State/props We change update call
                3. unmouting : null value

                <h1>Hello name : {this.state.name}</h1>
                <button onClick={()=>this.setState({name : "Manthan "})}>Change Name</button>
            </div>
        )
    }
}

export default Life

// state : it's simple type of varibale
// State : we can change a data 
// state : same file use 
// State : Event method 
// State : this.state 
// state : this.setState() : method/fucntion inbulit
// State : as object define

import React, { Component } from 'react'
import ImageCompo from './ImageCompo';

class ClassState extends Component {
    constructor() {
        super();
        this.state = {
            name: "manthan",
            count: 0,
            isImage: true
        }
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Hello name : {this.state.name}</h1>
                <button onClick={() => { this.setState({ name: "Shubham jadav" }) }}>Change name</button>
                <button onClick={() => this.setState({ name: "sujal " })}>Change name 2</button>

                <h1>Count : {this.state.count}</h1>

                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
                <button onClick={() => this.setState({ count: this.state.count - 1 })}>Decrement</button>
                <button onClick={() => this.setState({ count: 0 })}>Zero</button>

                {/* sum =0 
                sum = this.state.sum + 1
                */}

                <br /> 
                <br />
                <button onClick={()=>this.setState({isImage : false})}>Hide</button> 
                 <button onClick={()=>this.setState({isImage : true})}>Show</button> 
                 <button onClick={()=>this.setState({isImage : !this.state.isImage })}>Toggle</button>

                <hr />
                {
                    (this.state.isImage) ? <ImageCompo /> : false
                }

                

            </div>
        )
    }
}

export default ClassState

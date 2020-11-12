import React, {Component} from 'react'

class Counter extends Component {
    constructor(){
        super()
        this.state = {
            counter: 0
        }
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }
    render() {
        return(
            <div>
                <button onClick = {this.decrement}>Decrement</button>
                <h1>{this.state.counter}</h1>
                <button onClick = {this.increment}>Increment</button>
            </div>

        )
    }
}
export default Counter
import React, {Component} from "react";


class Counter extends Component{
    constructor(){
        super()

        this.state = {
            counter:0
        }
    }

    IncreaseCount=()=>{
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render(){
        return(
            <React.Fragment>
                <h2>{this.state.counter}</h2>
                <button onClick={this.IncreaseCount}>class count</button>
            </React.Fragment>
        )
    }
}
export default Counter;
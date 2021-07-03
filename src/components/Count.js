import React, {useState} from "react"


function Count(){
    const [Count, setCount] = useState(0)
   
    function IncrementButton(){
        setCount(
            Count + 1
        )
    }
    
    function DecrementButton(){
        setCount(
            Count - 1
        )
    }

    return(
        <React.Fragment>
        <h2>{Count}</h2>
        <button onClick = {IncrementButton} className="btn btn-secondary m-1">Increment</button>
        <button onClick = {DecrementButton} className="btn btn-secondary m-1">Decrement</button>
        </React.Fragment>
    )
}
export default Count;
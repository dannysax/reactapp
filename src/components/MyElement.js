import React from "react"

function MyElement(props){
    function Myfunction(lib){
        return lib.map(ele=>
            <li>{ele}</li>)
    }
    return(
        <div>
            <h2 key={props.ele}>{Myfunction(props.lib)}</h2>
        </div>
    )
}
export default MyElement;
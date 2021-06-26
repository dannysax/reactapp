import React from "react"

function MyElement(props){
    function Myfunction(lib){
        return lib.map(ele=>
            <li key={ele}>{ele}</li>)
    }
    return(
        <div>
            <h2>{Myfunction(props.lib)}</h2>
        </div>
    )
}
export default MyElement;
import React from "react";
import {MyContext} from "../App"


function ComponentB(){
    return(
        <MyContext.Consumer>
            {
                data => {
                    return <h2>{data}</h2>
                }
            }
        </MyContext.Consumer>
    )
}
export default ComponentB;
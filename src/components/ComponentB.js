import React from "react";
import {MyContext} from "../App";
import {useContext} from "react";


function ComponentB(){
    const data = useContext( MyContext)
    return(

            <h2>{data}</h2>
        
    )
}
export default ComponentB;
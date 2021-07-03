import "./Forms.css"
import ReactHook from "./ReactHook";

import React, {Component} from "react"

class Forms extends Component{
    constructor(){
        super();
        this.state = {
            email : "",
            password : ""
        }
    }

    componentDidMount(){
        this.setState({
            email: "daniel@vizethdigital.com"
        })
    }

    EmailHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    PasswordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    
    
    render(){
        return(
            <div className="container">
                <input type="email" placeholder="Enter Email" className="form form-control" value={this.state.email} onChange={this.EmailHandler}/>
                <input type="password" placeholder="Enter Password" className="form form-control mt-2" value={this.state.password} onChange={this.PasswordHandler}/>
                <h1>Please kindly provide login details as follows</h1>

                <ReactHook/>
            </div>
        )
    }
}
export default Forms;
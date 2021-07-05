import React, {Component} from "react";


class MyClass extends Component{
    MySchool(schools){
        return schools.map(school =>
        <li key={school}>{school}</li>)
    }
    render(){
        return(
            <div>
               <a href="http://localhost:3000/login"> <button className="btn btn-success">login</button></a>
                <h1>{this.MySchool(this.props.schools)}</h1>
            </div>
            
        )
    }
}
export default MyClass;
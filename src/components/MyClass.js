import React, {Component} from "react";


class MyClass extends Component{
    MySchool(schools){
        return schools.map(school =>
        <li key={school}>{school}</li>)
    }
    render(){
        return(
            <div>
                <button className="btn btn-success">class button</button>
                <h1>{this.MySchool(this.props.schools)}</h1>
            </div>
            
        )
    }
}
export default MyClass;
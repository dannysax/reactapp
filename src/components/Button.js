import react, {Component} from "react"


class Button extends Component{ 
    constructor(){
        super();
        this.state = {
            name: "Dannysax Nail"
        }
    }

    changeName = () => {
        this.setState({
            name: this.state.name=="Dannysax Nail"?"James Forough":"Dannysax Nail"
        })
    }
    
    render(){
        return(
            <div>
                <h1 className="bg-primary text-white text-center">{this.state.name}</h1>
                <button className="btn btn-primary" onClick={this.changeName}>change text</button>

                
            </div>

            
        )
    }

}
export default Button
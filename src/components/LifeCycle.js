import { getDefaultNormalizer } from "@testing-library/react";
import React, {Component} from "react";


class LifeCycle extends Component{
    state = {
        posts: []
    }
    componentDidMount(){
        fetch("http://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => this.setState({posts:data}))
}

    render(){
        const {posts} = this.state
        return(
            <div>
            <h1>Testing components did Mount</h1>
            <h2>{this.DataList}</h2>

            {
                posts.map(post=>
                    <h2 key={post.id}>{post.title}</h2>)
            }
            </div>
        )
    }
}
export default LifeCycle;
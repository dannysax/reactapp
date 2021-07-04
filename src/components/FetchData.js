import axios from "axios";
import React, {useState, useEffect} from "react";


function FetchData(){
    const [Articles, setArticles] = useState([])
    const [id, setId] = useState(1)
    useEffect(()=>{
        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then(resp=>setArticles(resp.data))
    }, [id])

    return(
        <React.Fragment>
            <h2 key={Articles.id}>{Articles.title}</h2>
            {/*
                Articles.map(articles=>
                    <h3 key={articles.id}>{articles.title}</h3>)
                */}
                <input className="form form-group" value = {id} onChange={(e)=>{setId(e.target.value)}}/>
        </React.Fragment>
    )
}
export default FetchData;
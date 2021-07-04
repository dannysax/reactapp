import React, {useState, useEffect} from "react"


function ReactHook(){
    const [info, setInfo] = useState({username:"", password:""})
    const [articles, setArticles] = useState(["The TOE way", "Entrepreneurship in Africa"])
    const [count, setCount] = useState(0)

    /*useEffect(()=>{
        console.log("useEffect is called")
    }, [count])*/
    useEffect(()=>{
        document.title = `button clicked ${count} times`
        console.log(`button clicked ${count} times`)
    })
    return(
        <React.Fragment>
            <input type="email" placeholder="Enter Email" className="form form-control" value={info.username} onChange={(e)=>{setInfo({...info, username:e.target.value})}}/>
                <input type="password" placeholder="Enter Password" className="form form-control mt-2" value={info.password} onChange={(e)=>{setInfo({...info, password:e.target.value})}}/>
                <h1>email: {info.username}</h1>
                <h1>password: {info.password}</h1>
                <button className="btn btn-success" onClick={()=>{setArticles([...articles, "New article added"])}}>Add Article</button>
                {
                    articles.map(article =>
                        <h2 key={article}>{article}</h2>)
                }

                <button className="btn btn-primary" onClick={()=>{setCount(count+1)}}>count up: {count}</button>
           
        </React.Fragment>
    )
}
export default ReactHook;

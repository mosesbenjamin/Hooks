import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetching = ()=>{

    const baseURL = "https://jsonplaceholder.typicode.com"
    
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(()=>{
        axios.get(`${baseURL}/posts/${idFromButtonClick}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.error(err)
        })
    }, [idFromButtonClick])

    const handleClick = ()=>{
        setIdFromButtonClick(id)
    }

    return(
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <h5>{ post.title}</h5>
            {/* <ul>
                {
                    posts.map(post =><li key={post.id}>{ post.title }</li>)
                }
            </ul> */}
        </div>
    );
}

export default DataFetching;
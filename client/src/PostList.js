import React, { useState, useEffect} from "react";
import axios from 'axios';
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
export default () => {
    const [posts, setPosts] = useState([]); 
    const fetchPost = async () => {
            console.log('test dari fetchpost');
            const res = await axios.get('http://localhost:4002/posts');
            setPosts(res.data);
    };

    useEffect(() => {
      fetchPost();
    }, []);

    const renderedPost = Object.values(posts).map(post => {
        return <div className="card" style={{ width: '30%', marginBottom: '20px' }} key={post.id}>
            <div className="card-body">
                <h3>{post.title}</h3>
                <CommentCreate postId={post.id} />
                <CommentList comments={post.comments} />
            </div>
        </div>
    })
    
    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
           {renderedPost}
        </div>
    )
}
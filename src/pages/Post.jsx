import React from 'react'
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';

const Post = () => {
    const [posts, setPosts] = useState([]);

    return (
      <div className="post">
        
        {posts.map((post, index) => (
          <Post className="post" key={`post-${index}`}>
            <Link to={`/post/${post.id}`}>
              <h3> {post.title} </h3>
            </Link>
            <div> {post.subtitle} </div>
          </Post>
        ))}
      </div>
    );
}

export default Post;
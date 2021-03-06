import React, { useState, useEffect } from 'react';
import PostPreview from '../PostPreview/PostPreview';

export default function HomeLatestPosts({ posts }) {

    const [latestPost, setLatestPosts] = useState([]);

    useEffect(() => {
        setLatestPosts(posts.slice(0,5))
    }, [posts]);

    function renderPostsPreviews() {
        return latestPost.map((post) => {
            return <PostPreview  post={post} key={post.id}/>            
        });
    }
    
    return (
        <>
            <h2>Latest Posts</h2>
            {renderPostsPreviews()}
        </>
    )
};

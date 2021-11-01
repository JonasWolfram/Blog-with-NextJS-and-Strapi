import React from 'react';
import axios from "axios";
import AllPosts from "../../components/AllPosts/AllPosts";


export default function Posts({ posts }) {
    return (
        <>
            <AllPosts posts={posts} />
        </>
    )
}

export async function getStaticProps() {

  const postsRes = await axios.get("http://localhost:1337/posts");
  
  return{
    props: {
      posts: postsRes.data
    },
  }
};

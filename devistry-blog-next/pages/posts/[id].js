import React from 'react';
import axios from "axios";
import MarkdownIt from 'markdown-it';

export default function PostPage({ post }) {
    const md = new MarkdownIt();
    const htmlContent = md.render(post.content);

    return (
        <article className="blogContentPage">
            <header className="blogContentPage__header">
                <h1 className="blogContentPage__h1">{post.title}</h1>
                <h3 className="blogContentPage__h3">{post.description}</h3>
            </header>
                <section className="blogContentPage__section" dangerouslySetInnerHTML={{__html: htmlContent}}></section>
        </article>
    )
}


export async function getStaticProps({ params }) {
    const postsRes = await axios.get(`http://localhost:1337/posts/${params.id}`);

    return { 
        props: {
            post: postsRes.data
        }
    }
}

export async function getStaticPaths() {

    const postsRes = await axios.get("http://localhost:1337/posts");

    const paths = await postsRes.data.map((post) => {
        return { params: { id: post.id.toString() } };
    });

    return {
        paths,
        fallback: false,
    };
}
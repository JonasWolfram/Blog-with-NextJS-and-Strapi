import React from 'react'
import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="navBar">
            <div className="container">
                <Link href="/">
                    <a className="title">Blog with NextJS and Strapi</a>
                </Link>
                <ul>
                    <li>
                        <Link href="/posts">
                            <a>All Blog Posts</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

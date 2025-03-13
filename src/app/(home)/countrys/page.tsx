import Link from 'next/link';
import React from 'react';

interface Post {
    id: number;
    title: string;
    body: string;
}

export default async function Page() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await response.json();

    return (
        <div className='grid grid-cols-5 gap-3'>
            {posts.map(post => (
                <div key={post.id} className="p-5 bg-yellow-50 shadow-md rounded-lg text-gray-600">
                    <p>{post.id}</p>
                    <h2 className="text-lg font-bold">{post.title}</h2>
                    <p className="text-gray-600">{post.body}</p>
                    <Link href={`/countrys/${post.id}`} className="btn mt-3">
                        Show Details
                    </Link>
                </div>
            ))}
        </div>
    );
}

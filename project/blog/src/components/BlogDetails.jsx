import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const BlogDetails = () => {
    const { id } = useParams();
    console.log("id", id);
    
    const [blog, setBlog] = useState(null);
    console.log("blog", blog);

    if(!blog) return <h2>Loading......</h2>
    

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => setBlog(res.data))
            .catch((err) => console.log(err))
    }, []);


    return (
        <div className='max-w-4xl max-auto p-5'>
            <h2 className='text-4xl font-bold mb-4'>
                {blog.title}
            </h2>
            <p className='text-gray-700 leading-8'>
                {blog.body}

            </p>
        </div>
    )
}

export default BlogDetails
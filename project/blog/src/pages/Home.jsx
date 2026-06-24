import React from 'react'
import BlogCard from '../components/BlogCard'
import axios from 'axios'

import { useState, useEffect } from "react"

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    // console.log("blogs", blogs);


    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => setBlogs(res.data))
            .catch((err) => console.log(err));

    })


    if (!blogs) return <h2>Loading......</h2>


    return (
        <div className='max-w-6xl mx-auto p-5' >
            <h1 className='text-3xl font-bold mb-6'>Latest Blogs</h1>

            <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-6'>

                {blogs.map((blog) => (

                    <BlogCard key={blog.id} blog={blog} />

                ))}



            </div>



        </div>
    )
}

export default Home
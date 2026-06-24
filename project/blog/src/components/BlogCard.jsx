import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    // console.log(blog);

    return (
        <div className='bg-white text-black shadow-md rounded-xl p-5 border hover-lg transition'>
            {/* <p>{blog.title}</p>
         */}

            <h2 className='text-xl fon-bold mb-3 line-clamp-2'>
                {blog.title}

            </h2>

            <p className='text-gray-600 mb-4 line-clamp-3'>
                {blog.body}
            </p>

            <Link to={`/blogs/${blog.id}`}
                className='inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
            >
                Read More
            </Link>
        </div>
    )
}

export default BlogCard
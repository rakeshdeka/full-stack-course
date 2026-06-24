import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const CreatePost = () => {

    const [formData, setFormData] = useState({
        title: "",
        body: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "https://jsonplaceholder.typicode.com/posts",
                {
                    title: formData.title,
                    body: formData.body,
                    userId: 1

                }
            )
            console.log(res.data);
            alert("blog created");

        } catch { error } {
            console.log(error);

        }
    }


    return (
        <div className='max-w-xl max-auto p-5'>
            <h2 className='text-3xl font-bold mb-5'> Create Blog</h2>

            <form onSubmit={handleSubmit} className='space-y-4'>
                <input type="text"
                    name='title'
                    placeholder='Blog Title'
                    value={formData.title}
                    onChange={handleChange}
                    className='w-full border p-3 rounded'
                />

                <textarea
                    name="body"
                    placeholder='Write Your blog...'
                    row="6"
                    value={formData.body}
                    onChange={handleChange}
                    className='w-full border p-3 rounded'
                />

                <button type='submit'
                    className='bg-green-500 hover:bg-green-800 text-white px-5 rounded py-3 cursor-pointer'
                >
                    Publish

                </button>

            </form>


        </div>
    )
}

export default CreatePost
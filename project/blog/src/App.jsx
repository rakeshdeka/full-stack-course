import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BlogDetails from './components/BlogDetails'
import CreatePost from './pages/CreatePost'

// import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs/:id' element={<BlogDetails />} />
        <Route path='/create-post' element={<CreatePost/>} />
      </Routes>


    </BrowserRouter>
  )
}

export default App

import './App.css'
import Auth from './components/Auth'
import Blogs from './components/Blogs'
import Header from './components/Header'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UserBlogs from './components/UserBlogs'
import BlogDetails from './components/BlogDetails'
import AddBlog from './components/AddBlog'

function App() {

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/auth' element={<Auth />}/>
          <Route path='/blogs' element={<Blogs />}/>
          <Route path='/myblogs' element={<UserBlogs/>}/>
          <Route path='/myblogs/:id' element={<BlogDetails />}/>
          <Route path='/blogs/add' element={<AddBlog />}/>
        </Routes>
      </main>
    </React.Fragment>
  )
}

export default App

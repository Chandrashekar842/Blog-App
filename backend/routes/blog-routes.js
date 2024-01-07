import express from 'express'
import { getBlogs, postBlog, updateBlog, getBlogById, deleteBlog, getBlogsOfUser } from '../controllers/blog.js'

export const blogRouter = express.Router()

blogRouter.get('/', getBlogs)

blogRouter.post('/add', postBlog)

blogRouter.put('/update/:id', updateBlog)

blogRouter.get('/:id', getBlogById)

blogRouter.delete('/:id', deleteBlog)

blogRouter.get('/user/:id', getBlogsOfUser)
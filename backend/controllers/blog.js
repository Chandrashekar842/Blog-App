import {Blog} from '../models/blog.js'
import mongodb from 'mongodb'
import { User } from '../models/user.js'
import mongoose from 'mongoose'

export const getBlogs = async (req, res, next) => {
    let blogs

    try {
        blogs = await Blog.find().populate('user')
    } catch (error) {
        console.log(err)
    }
    if(!blogs) {
        return res.status(404).json({message: "No blogs FOund!!"})
    }

    return res.status(200).json({blogs})
}

export const postBlog = async (req, res, next) => {
    const { title, imageUrl, description, user } = req.body
    let existingUser
    try {
        existingUser = await User.findById(user)
    } catch (error) {
        console.log(error)
    }
    if(!existingUser) {
        return res.status(400).json({message: "Couldn't find the user"})
    }

    const blog = new Blog({
        title,
        imageUrl,
        description,
        user
    })
    
    try {
        const session =await mongoose.startSession()
        session.startTransaction()
        await blog.save({session})
        existingUser.blogs.push(blog)
        await existingUser.save()
        await session.commitTransaction()
    } catch (error) {
        console.log(error)
    }

    return res.status(200).json({blog})
}

export const updateBlog = async (req, res, next) => {
    const { title, imageUrl, description } = req.body
    const id = req.params.id
    let blog
    try {
        blog = await Blog.findByIdAndUpdate(new mongodb.ObjectId(id), {
            title,
            imageUrl,
            description
        })
    } catch (error) {
        console.log(error)
    }

    if(!blog) {
        return res.status(400).json({message: "no blog found!!"})
    }

    return res.status(200).json({blog})
}

export const getBlogById = async (req, res, next) => {
    const id = req.params.id
    let blog
    try {
        blog = await Blog.findOne(new mongodb.ObjectId(id))
    } catch (error) {
        console.log(err)
    }

    if(!blog) {
        return res.status(400).json({message: "no blog found"})
    }

    return res.status(200).json({blog})
}

export const deleteBlog = async (req, res, next) => {
    const id = req.params.id
    let blog 

    try {
        blog = await Blog.findByIdAndDelete(id).populate('user')
        await blog.user.blogs.pull(blog)
        await blog.user.save()
    } catch (error) {
        console.log(error)
    }

    if(!blog) {
        return res.status(400).json({message: "Couldn't find the blog to delete"})
    }

    return res.status(200).json({message: "Successfully Deleted!!"})
}

export const getBlogsOfUser = async (req, res, next) => {
    const id = req.params.id
    let blogs
    try {
        blogs = await User.findById(id).populate('blogs')
    } catch (error) {
        console.log(error)
    }
    if(!blogs) {
        return res.status(400).json({message: "No Blogs Found!"})
    }

    return res.status(200).json({blogs})
}
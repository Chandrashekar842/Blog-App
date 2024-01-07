import { User } from '../models/user.js'
import bcrypt from 'bcryptjs'

export const getAllUsers = async (req, res, next) => {
    let users
    try {
        users = await User.find()
    } catch(err) {
        console.log(err)
    }
    if(!users) {
        return res.status(404).json({message: "No users found!"})
    }
    return res.status(200).json({users})
} 

export const postUser = async (req, res, next) => {
    const { name, email, password } = req.body

    let existingUser
    try {
        existingUser = await User.findOne({email: email})
    } catch(err) {
        console.log(err)
    }
    const hashedPassword = bcrypt.hashSync(password)
    if(existingUser) {
        return res.status(400).json({message: "Email is Already Registered!!"})
    }
    const user = new User({
        name,
        email, 
        password: hashedPassword,
        blogs: []
    })
    try {
        await user.save()
    } catch(err) {
        console.log(err)
    }

    return res.status(200).json({user})
}

export const postLogin = async (req, res, next) => {
    const { email, password } = req.body
    
    let existingUser
    try {
        existingUser = await User.findOne({email})
    } catch(err) {
        console.log(err)
    }

    if(!existingUser) {
        return res.status(404).json({message: "User Couldn't Found!!"})
    }

    const passwordCompare = bcrypt.compareSync(password, existingUser.password)

    if(passwordCompare) {
        return res.status(200).json({message: "lOGIN Successfull!!"})
    }

    return res.status(404).json({message: "Invalid Credentials"})
}
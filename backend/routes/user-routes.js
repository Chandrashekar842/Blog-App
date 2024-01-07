import express from 'express'
import { getAllUsers, postUser, postLogin } from '../controllers/user.js'

export const userRouter = express.Router()

userRouter.post('/signup', postUser)

userRouter.get('/', getAllUsers)

userRouter.post('/login', postLogin)
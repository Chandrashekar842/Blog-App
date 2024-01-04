import express from 'express'
import { getAllUsers, postUser } from '../controllers/user.js'

export const userRouter = express.Router()

userRouter.post('/signup', postUser)
userRouter.get('/', getAllUsers)


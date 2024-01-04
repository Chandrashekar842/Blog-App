import express from 'express'
import mongoose from 'mongoose'

import { userRouter } from './routes/user-routes.js'

const app = express()

app.use(express.json())

app.use('/api/user', userRouter)

mongoose.connect('mongodb+srv://Chandu21:1fcJg6wZwkUvSYuE@blogapp.zqdgcnt.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => {
        app.listen(5000)
        console.log("Connected to mongodb")
    })
    .catch(err => console.log(err))

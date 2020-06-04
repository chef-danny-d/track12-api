import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import mongoose from 'mongoose'
require('dotenv').config()
import home from './routes/index'
const app = express()
import { database } from './config/db'

database()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/', home)

app.listen(3600, () => console.log(`Server is listening on port 3600`))

export default app

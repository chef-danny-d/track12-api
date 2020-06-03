import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import mongoose from 'mongoose'
require('dotenv').config()
import home from './routes/index'
const app = express()

const config = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
}
mongoose
    .connect(process.env.db, config)
    .then(() => {
        console.log('Connected to db')
    })
    .catch((err) => {
        console.error(err)
    })

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', home)

app.listen(3600, () => console.log(`Server is listening on port 3600`))

export default app

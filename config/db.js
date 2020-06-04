import mongoose from 'mongoose'
require('dotenv').config()

export const database = () => {
    const options = {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
    }
    mongoose
        .connect(process.env.db, options)
        .then(() => {
            console.log('Connected to db... ')
        })
        .catch((err) => {
            console.error(err)
        })
}

//import mongoose from 'mongoose'
const mongoose = require('mongoose')
require('dotenv').config()

const database = () => {
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

module.exports = database
require('dotenv').config()
const express = require('express')
const app = express()
const logger = require('morgan')
const home = require('./routes/index')
const database = require('./config/db')

database()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', home)
app.set('port', process.env.port || 3600)
app.listen(app.get('port'), () =>
    console.log(`Server is listening on port ${app.get('port')}`)
)

module.exports = app
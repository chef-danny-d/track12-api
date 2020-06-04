import express from 'express'
import logger from 'morgan'
require('dotenv').config()
import home from './routes/index'
const app = express()
import { database } from './config/db'

database()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', home)
app.set('port', process.env.port || 3600)
app.listen(app.get('port'), () =>
    console.log(`Server is listening on port ${app.get('port')}`)
)

export default app

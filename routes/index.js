import express from 'express'
const home = express.Router()
import Entry from '../models/Entry'

/* GET home page. */
home.get('/', (req, res, next) => {
    Entry.find()
        .then((data) => {
            if (!data) {
                return res.status(400).end
            } else {
                res.status(200).send(data)
            }
        })
        .catch((err) => {
            console.error(err)
            next()
        })
})
home.post('/', (req, res, next) => {
    const { lat, lng, presence, tactic, force, numReports } = req.body
})

export default home

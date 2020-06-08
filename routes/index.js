const express = require('express')
const home = express.Router()
const Entry = require('../models/Entry')

home.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://track12.now.sh') // update to match the domain you will make the request from
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
})
home.get('/', (req, res, next) => {
    Entry.find()
        .sort({ spotted: '-1' })
        .then((data) => {
            if (!data) {
                return res.status(400).end
            } else {
                res.status(200).json(data)
            }
        })
        .catch((err) => {
            console.error(err)
            next()
        })
})
home.post('/', (req, res, next) => {
    console.log(req.body)
    const { lat, lng, presence, tactic, force, address } = req.body
    Entry.find()
        .then((collection) => {
            const newEntry = new Entry({
                lat,
                lng,
                presence,
                tactic,
                force,
                address,
            })
            if (collection.lat == lat && collection.lng == lng) {
                newEntry.update()
            } else {
                console.log('here')
                newEntry.save().then((result) => {
                    res.status(200).json(result)
                })
            }
        })
        .catch((err) => {
            console.error(err)
            res.status(400).end()
        })
})

module.exports = home

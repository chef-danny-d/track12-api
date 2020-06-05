const express = require('express')
const home = express.Router()
const Entry = require('../models/Entry')

/* GET home page. */
home.get('/', (req, res, next) => {
    Entry.find()
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
    const { lat, lng, presence, tactic, force } = req.body
    Entry.find()
        .then((collection) => {
            const newEntry = new Entry({ lat, lng, presence, tactic, force })
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
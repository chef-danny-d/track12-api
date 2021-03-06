//import mongoose from 'mongoose'
const mongoose = require('mongoose')

const Entry = new mongoose.Schema({
    lat: {
        type: Number,
        trim: true,
    },
    lng: {
        type: Number,
        trim: true,
    },
    presence: {
        // heavy | medium | low
        type: String,
        trim: true,
    },
    force: {
        // police | national guard
        type: String,
    },
    tactic: {
        // stationary | chasing | marching
        type: String,
        trim: true,
    },
    numReports: {
        type: Number,
        default: 1,
    },
    spotted: {
        type: Date,
        default: Date.now(),
    },
    address: {
        type: String,
        default: '',
        trim: true,
    },
})

module.exports = mongoose.model('Entry', Entry, 'position')

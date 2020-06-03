import mongoose from 'mongoose'

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
    },
    spotted: {
        type: Date,
        default: Date.now(),
    },
})

export default mongoose.model('Entry', Entry, 'position')

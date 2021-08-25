const mongoose = require('mongoose')
const Schema = mongoose.Schema

const scoreSchema = new Schema({
    username: {
        type: String
    },
    point_total: {
        type: Number
    }
}, { timestamps: true })

const Score = mongoose.model('Score', scoreSchema)

module.exports = Score
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Laptop = new Schema(
    {
        name: { type: String, required: true },
        description: { type: [String], required: true },
        quantity: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('laptops', Laptop)
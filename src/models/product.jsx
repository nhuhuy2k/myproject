const mongoose = require('mongoose')
const Schema = mongoose.Schema

const product = new Schema({
    name: String,
    price: Number,
    quantity: Number,
    description: String,
    images: String,
    date: Date
})

module.exports = mongoose.model('product', product)
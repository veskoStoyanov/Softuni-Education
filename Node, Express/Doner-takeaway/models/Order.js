const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    creator: { type: mongoose.Schema.Types.ObjectId, fer: 'User', required: true},
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Doner",  required: true },
    creationDate: { type: mongoose.Schema.Types.Date, default: Date.now },
    toppings: [{ type: mongoose.Schema.Types.String }],
    status: {type: mongoose.Schema.Types.String, default: "pending" }
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order;
const mongoose = require('mongoose');

const rentShema = new mongoose.Schema({
    days: { type: mongoose.Schema.Types.Number, require: true },
    car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', require: true },
    owner: { type: mongoose.Schema.Types.String, ref: 'User', require: true  }
})

const Rent = mongoose.model('Rent', rentShema)

module.exports = Rent;
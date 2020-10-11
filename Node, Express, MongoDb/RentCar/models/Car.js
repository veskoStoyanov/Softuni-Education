const mongoose = require('mongoose');

const carShema = new mongoose.Schema({
    model: {type: mongoose.Schema.Types.String, require: true},
    pricePerDay: {type: mongoose.Schema.Types.Number, require: true},
    image: {type: mongoose.Schema.Types.String, require: true},
    isRented: {type: mongoose.Schema.Types.Boolean, default: false}
})

const Car = mongoose.model('Car', carShema)

module.exports= Car;
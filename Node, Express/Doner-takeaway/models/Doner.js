const mongoose = require('mongoose');

const donerSchema = new mongoose.Schema({
category: {type: mongoose.Schema.Types.String, unique: true, required: true},
size: {type: mongoose.Schema.Types.Number, required: true},
imageUrl: {type: mongoose.Schema.Types.String, required: true},
toppings: [{type: mongoose.Schema.Types.String}]
})

const Doner = mongoose.model('Doner', donerSchema)

module.exports = Doner;
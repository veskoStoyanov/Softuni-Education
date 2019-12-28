const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const hotelSchema = new Schema({

    city: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },
    reservations: [{
        type: String,
    }]

});


module.exports = new Model('Hotel', hotelSchema);
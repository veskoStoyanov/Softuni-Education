const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const motorSchema = new Schema({

    isBanned: {
        type: Boolean,
        default: false,
    },

    description: {
        type: String,
        required: true,
    },

    creator: {
        type: ObjectId,
        ref: "User"
    },

    model: {
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

    city: {
        type: String,
        required: true,
    },

    likes: [{
        type: ObjectId,
        ref: 'User'
    }]
});


module.exports = new Model('Motor', motorSchema);
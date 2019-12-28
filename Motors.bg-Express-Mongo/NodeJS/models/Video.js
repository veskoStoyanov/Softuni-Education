const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;


const videoSchema = new Schema({

    url: {
        type: String,
        required: true,
    },

    model: {
        type: String,
        required: true,
    },

    views: {
        type: Number,
        default: 0
    },
});

module.exports = new Model('Video', videoSchema);
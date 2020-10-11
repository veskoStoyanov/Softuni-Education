const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const contactSchema = new Schema({

    username: {
        type: String,
        required: true,
    },

    receiver: {
        type: String,
        required: true,
    },

    subject: {
        type: String,
        required: true,
    },

    message: {
        type: String,
        required: true,
    },
    isRecent: {
        type: Boolean,
        default: true
    },

});


module.exports = new Model('Contact', contactSchema);
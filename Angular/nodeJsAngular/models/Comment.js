const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const commentSchema = new Schema({

    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    videoId: {
        type: ObjectId,
        ref: 'Video',
        required: true,
    }
});


module.exports = new Model('Comment', commentSchema);
const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
    title: { type: mongoose.Schema.Types.String, required: true },
    comment: { type: mongoose.Schema.Types.String, required: true },
    hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true },
    creationDate: { type: mongoose.Schema.Types.Date, default: Date.now },
    creator: {type: mongoose.Schema.Types.String, required: true }
});

const Comment = mongoose.model('Comment', commentsSchema);

module.exports = Comment;
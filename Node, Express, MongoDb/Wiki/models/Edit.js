const mongoose = require('mongoose');

const editSchema = new mongoose.Schema({
    title: { type: mongoose.Schema.Types.String},
    content: { type: mongoose.Schema.Types.String, required: true },
    article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    creationDate: { type: mongoose.Schema.Types.Date, default: Date.now },
});

const Edit = mongoose.model('Edit', editSchema);

module.exports = Edit;
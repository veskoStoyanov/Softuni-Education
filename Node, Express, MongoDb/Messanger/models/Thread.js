const mongoose = require('mongoose');

const threadSchema = new mongoose.Schema({
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }],
    creationDate: {type: mongoose.Schema.Types.Date,
        default: Date.now,
        require: true}
})

const Thread = mongoose.model('Thread', threadSchema);

module.exports = Thread;
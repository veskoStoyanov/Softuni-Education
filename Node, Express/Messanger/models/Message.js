const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    content: {
        type: mongoose.Schema.Types.String,
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    thread: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thread',
        require: true
    },

})

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
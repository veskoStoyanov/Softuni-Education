const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    title: { type: mongoose.Schema.Types.String, required: true },
    description: { type: mongoose.Schema.Types.String, required: true },
    location: { type: mongoose.Schema.Types.String, required: true },
    image: { type: mongoose.Schema.Types.String, required: true },
    creationDate: { type: mongoose.Schema.Types.Date, default: Date.now },
    category: { type: mongoose.Schema.Types.String, required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Vies", }],
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    views: { type: mongoose.Schema.Types.Number, default: 0 },
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
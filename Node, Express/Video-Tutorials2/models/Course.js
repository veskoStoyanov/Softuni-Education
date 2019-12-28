const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: mongoose.Schema.Types.String, unique: true },
    description: { type: mongoose.Schema.Types.String, maxlength: 50 },
    image: { type: mongoose.Schema.Types.String, required: true },
    isPublic: { type: mongoose.Schema.Types.Boolean, default: false },
    createdAt: { type: mongoose.Schema.Types.Date, default: Date.now },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    enrolledUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
})

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
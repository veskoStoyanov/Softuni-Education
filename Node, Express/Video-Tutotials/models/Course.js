const mongoose = require('mongoose');

const courseScema = new mongoose.Schema({
    title: { type: mongoose.Schema.Types.String, required: true, unique: true },
    description: { type: mongoose.Schema.Types.String, required: true, maxlength: 50 },
    image: {type: mongoose.Schema.Types.String, required: true},
    isPublic: {type: mongoose.Schema.Types.Boolean, default: false},
    lectures: [{type: mongoose.Schema.Types.ObjectId, ref:'Lecture'}],
    usersEnrolled: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}],
});

const Course = mongoose.model('Course', courseScema);

module.exports = Course;
const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
    title: { type: mongoose.Schema.Types.String, required: true },
    video: { type: mongoose.Schema.Types.String, required: true },
    usersEnrolled: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
});

const Lecture = mongoose.model('Lecture', lectureSchema);

module.exports = Lecture;
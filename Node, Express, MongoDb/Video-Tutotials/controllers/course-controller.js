const Course = require('../models/Course');
const Lecture = require('../models/Lecture');

module.exports = {

    enrollCourse: async (req, res) => {

        try {
            let course = await Course.findById(req.params.id)
            course.usersEnrolled.push(req.user._id);
            await course.save();
            res.redirect(`/details/course/${course._id}`);
        } catch (e) {
            console.log(e);

        }
    },
    getDetailsCourse: async (req, res) => {
        try {
            let course = await Course.findById(req.params.id);
            let lectures = [];
            for (const lec of course.lectures) {
                let lecture = await Lecture.findById(lec);
                lectures.push(lecture)


            }

            let isRolled = course.usersEnrolled.indexOf(req.user._id) >= 0;


            res.render('courses/details', { course, isRolled, lectures });
        } catch (e) {
            console.log(e);

        }

    },
    getPlay: async (req, res) => {
        try {

            let courses = await Course.find();

            let course = courses.filter(x => x.lectures.includes(req.params.id))[0];

            let lectures = [];
            for (const lec of course.lectures) {
                let lecture = await Lecture.findById(lec);
                lectures.push(lecture)

            }


           
            let lecture = await Lecture.findById(req.params.id);

            res.render('courses/play', { lectures, lecture });
        } catch (e) {
            console.log(e);

        }
    },
    search: async (req, res) => {



        try {
            let find = req.query.name.toLowerCase();

            let courses = await Course.find();
            courses = courses.filter(x => x.title.toLowerCase().includes(find));
            let public = courses.filter(c => c.isPublic === true);
            let text = req.body.text;
            console.log(text);



            res.render('home/index', { public, courses, });
        } catch (e) {
            console.log(e);

        }

    }
}
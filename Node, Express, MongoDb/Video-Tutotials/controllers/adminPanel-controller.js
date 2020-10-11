const Lecture = require('../models/Lecture');
const Course = require('../models/Course');

module.exports = {
    getAdminPanel: async (req, res) => {
        try {
            let course = await Course.findById(req.params.id);

            let lectures = [];
            for (const lec of course.lectures) {
                let lecture = await Lecture.findById(lec);
                lectures.push(lecture)


            }

            res.render('courses/admin-panel', { course, lectures });
        } catch (e) {
            console.log(e);

        }

    },
    getCreate: (req, res) => {
        res.render('courses/create');
    },
    postCreate: async (req, res) => {
        let data = req.body;

        try {
            await Course.create({
                title: data.title,
                description: data.description,
                image: data.image,
                isPublic: data.isPublic === 'on',
            })

            res.redirect('/')

        } catch (e) {
            console.log(e);

        }
    },
    getEdit: async (req, res) => {
        try {
            let course = await Course.findById(req.params.id);
            res.render('courses/edit', course)
        } catch (e) {
            console.log(e);

        }
    },
    postEdit: async (req, res) => {
        try {
            let data = req.body;
            let course = await Course.findById(req.params.id);

            course.title = data.title;
            course.description = data.description;
            course.image = data.image;

            if (data.isPublic === 'on') {
                course.isPublic = true;
            } else {
                course.isPublic = false;
            }

            await course.save();
            res.redirect('/')
        } catch (e) {
            console.log(e);

        }
    },
    postCreateLecture: async (req, res) => {
        try {
            let data = req.body;
            let course = await Course.findById(req.params.id);
            console.log(course);


            let lecture = await Lecture.create({
                title: data.title,
                video: data.video,
            });

            course.lectures.push(lecture._id)
            await course.save();

            res.redirect('back');
        } catch (e) {
            console.log(e);

        }

    },
    deleteLecture: async (req, res) => {
        try {

            let courses = await Course.find();

            let course = courses.filter(x => x.lectures.includes(req.params.id))[0];

            let index = course.lectures.indexOf(req.params.id);
            course.lectures.splice(index, 1)

            await course.save();
            await Lecture.findByIdAndRemove(req.params.id)

            res.redirect('back')
        } catch (e) {
            console.log(e);

        }
    },
    
   
    

}
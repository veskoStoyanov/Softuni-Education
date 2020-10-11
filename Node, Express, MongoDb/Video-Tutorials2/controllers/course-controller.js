const Course = require('../models/Course');
const User = require('../models/User');
module.exports = {
    getCreate: (req, res) => {
        res.render('courses/create');
    },
    postCreate: async (req, res) => {
        try {
            if (!(req.body.image.startsWith('http'))) {
                res.locals.globalError = 'should start with http';
                res.render('courses/create');
                return;
            }

            if (req.body.title.length < 4) {
                res.locals.globalError = 'title too simple';
                res.render('courses/create');
                return;
            }

            await Course.create({
                title: req.body.title,
                description: req.body.description,
                image: req.body.image,
                isPublic: req.body.isPublic === 'on',
                creator: req.user._id
            })
            res.redirect('/')
        } catch (e) {
            console.log(e);

        }
    },
    details: async (req, res) => {
        try {

            let course = await Course.findById(req.params.id);
            let isEnrolled = course.enrolledUsers.includes(req.user._id);
            let isCreator = course.creator.toString() === req.user._id.toString();

            res.render('courses/details', { course, isEnrolled, isCreator })
        } catch (e) {
            console.log(e);

        }
    },
    enroll: async (req, res) => {
        try {
            req.user.enrolledCourses.push(req.params.id);
            await req.user.save();

            let course = await Course.findById(req.params.id);
            course.enrolledUsers.push(req.user._id)
            await course.save();
            res.redirect('back')
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
            let newDate = req.body;

            let course = await Course.findById(req.params.id);
            course.title = newDate.title;
            course.description = newDate.description;
            course.image = newDate.image;
            course.isPublic = newDate.isPublic === 'on'
            await course.save();
            res.redirect(`/details/${course._id}`);

        } catch (e) {
            console.log(e);

        }
    },
    remove: async (req, res) => {
        try {
            let users = await User.find();


            for (const us of users) {

                for (let i = 0; i < us.enrolledCourses.length; i++) {
                    if (us.enrolledCourses[i]) {
                        if (us.enrolledCourses[i].toString() === req.params.id.toString()) {
                            us.enrolledCourses.splice(i, 1);
                            await us.save();
                        }
                    }
                }

            }
            await Course.findByIdAndRemove(req.params.id);
            res.redirect('/')

        } catch (e) {
            console.log(e);

        }
    },
   
}
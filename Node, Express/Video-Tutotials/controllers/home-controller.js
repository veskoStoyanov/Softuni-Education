const Course = require('../models/Course');

module.exports = {
    index: async (req, res) => {
        try {
            let courses = await Course.find();
            let public = courses.filter(c => c.isPublic === true)
           
           
            
            res.render('home/index', { public, courses,});
        } catch (e) {
            console.log(e);

        }

    }
};
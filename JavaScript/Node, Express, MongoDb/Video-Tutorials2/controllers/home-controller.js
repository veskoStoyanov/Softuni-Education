const Course = require('../models/Course');

module.exports = {
    index: async (req, res) => {
        try {
            let courses = await Course.find()
            .sort('-createdAt');

            let logoutUsers = courses.filter(x => {
                return x.isPublic === true
            }).sort((a, b) => {
                return b.enrolledUsers.length - a.enrolledUsers.length
            });
            
            let loginUsers = courses.filter(x => {
                return x.isPublic === true
            });
            
            logoutUsers.splice(3,);
               
            res.render('home/index', {logoutUsers, loginUsers});
        } catch (e) {
            console.log(e);

        }      
    },
    search: async (req, res) => {
        try {
            let text = req.query.name;

            let courses = await Course.find();

            courses = courses.filter(x => x.title.toLowerCase().includes(text.toLowerCase()));
            let loginUsers = courses.filter(x => {
                return x.isPublic === true
            }).sort((a, b) => {
                return b.createdAt - a.createdAt
            });
            res.render('home/index', { loginUsers })

        } catch (e) {
            console.log(e);

        }
    }
};
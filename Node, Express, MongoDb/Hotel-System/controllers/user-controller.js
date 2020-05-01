const encryption = require('../util/encryption');
const User = require('mongoose').model('User');
const Hotel = require('../models/Hotel');
const Comment = require('../models/Comment');

module.exports = {
    registerPost: async (req, res) => {
        const reqUser = req.body;
        const salt = encryption.generateSalt();
        const hashedPass =
            encryption.generateHashedPassword(salt, reqUser.password);
        try {
            const user = await User.create({
                username: reqUser.username,
                hashedPass,
                salt,
                firstName: reqUser.firstName,
                lastName: reqUser.lastName,
                roles: []
            });
            req.logIn(user, (err, user) => {
                if (err) {
                    res.locals.globalError = err;
                    res.render('users/loginRegister', user);
                } else {
                    res.redirect('/');
                }
            });
        } catch (e) {
            console.log(e);
            res.locals.globalError = e;
            res.render('users/loginRegister');
        }
    },
    logout: (req, res) => {
        req.logout();
        res.redirect('/');
    },
    loginPost: async (req, res) => {
        const reqUser = req.body;
        try {
            const user = await User.findOne({ username: reqUser.username });
            if (!user) {
                errorHandler('Invalid user data');
                return;
            }
            if (!user.authenticate(reqUser.password)) {
                errorHandler('Invalid user data');
                return;
            }
            req.logIn(user, (err, user) => {
                if (err) {
                    errorHandler(err);
                } else {
                    res.redirect('/');
                }
            });
        } catch (e) {
            errorHandler(e);
        }

        function errorHandler(e) {
            console.log(e);
            res.locals.globalError = e;
            res.render('users/loginRegister');
        }
    },
    loginRegister: (req, res) => {
        res.render('users/loginRegister');
    },
    getListInfo: (req, res) => {
        res.render('users/listInfo');
    },
    postListInfo: async (req, res) => {
                 
        try {
            let user = await User.findOne({
                username: req.body.username
            })
            console.log(user._id);
            console.log(user.username);

            let hotels = await Hotel.find({
                creator: user._id
            });

            let comments = await Comment.find({
                creator: user.username
            });

                res.render('users/listInfo', {hotels, comments})
        } catch (e) {
            console.log(e);

        }
    }
};
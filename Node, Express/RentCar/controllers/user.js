const User = require('../models/User');
const encryption = require('../util/encryption');
const Rent = require('../models/Rent');

module.exports = {
    registerGet: (req, res) => {
        res.render('user/register');
    },
    registerPost: async (req, res) => {
        let reqUser = req.body;

        if (!reqUser.password || !reqUser.username) {
            reqUser.error = 'Please fill all fields!';
            res.render('user/register', reqUser)
            return;
        }

        if (reqUser.password !== reqUser.repeatPassword) {
            reqUser.error = 'Password must match!';
            res.render('user/register', reqUser)
            return;
        }

        const salt = encryption.generateSalt();
        const hashedPass = encryption.generateHashedPassword(salt, reqUser.password);

        try {
            const user = await User.create({
                salt,
                hashedPass,
                username: reqUser.username,
                firstName: reqUser.firstName,
                lastName: reqUser.lastName,
                password: reqUser.password,
                roles: ['User']
            });

            req.logIn(user, (err) => {
                if (err) {
                    reqUser.error = err;
                    res.render('user/register', reqUser)
                    return;
                }

                res.redirect('/')

            })

        } catch (e) {
            res.render('user/register', reqUser)
            return;
        }


    },
    logout: (req, res) => {
        req.logout()
        res.redirect('/')

    },
    loginGet: (req, res) => {
        res.render('user/login');

    },
    loginPost: async (req, res) => {
        let userReq = req.body;

        try {
            let user = await User.findOne({ username: userReq.username })

            if (!user) {
                userReq.error = 'Incorrect username!!';
                res.render('user/login', userReq)
                return;
            }

            if (!user.authenticate(userReq.password)) {
                userReq.error = 'Incorrect password!';
                res.render('user/login', userReq)
                return;
            }

            req.logIn(user, (err) => {
                if (err) {
                    res.render('user/login', userReq)
                    return;
                }

                res.redirect('/');
            })

        } catch (e) {
            res.render('user/login', userReq)
            return;
        }
    },
 
};
const encryption = require('../util/encryption');
const User = require('mongoose').model('User');
const Expense = require('../models/Expense');

module.exports = {
    registerGet: (req, res) => {
        res.render('users/register');
    },
    registerPost: async (req, res) => {
        const reqUser = req.body;
        const salt = encryption.generateSalt();
        const hashedPass =
            encryption.generateHashedPassword(salt, reqUser.password);

        if (reqUser.password !== reqUser.repeatPassword) {
            errorHandler('The repeat password should be equal to the password');
            return;
        }
        let regex = new RegExp(/^[A-Za-z0-9]{4,}$/)

        if (!(regex.test(reqUser.username))) {
            errorHandler('The username should be at least 4 characters long and should consist only english letters and digits');
            return;
        }
        if (reqUser.password.length < 8) {
            errorHandler('The password should be at least 8 characters long');
            return;
        }
        if (reqUser.amount < 0) {
            errorHandler('The account amount  should be positive number');
            return;
        }

        try {

            const user = await User.create({
                username: reqUser.username,
                hashedPass,
                salt,
                amount: +reqUser.amount || 0

            });
            req.logIn(user, (err, user) => {
                if (err) {
                    res.locals.globalError = err;
                    res.render('users/register', user);
                } else {
                    res.redirect('/');
                }
            });

            
        } catch (e) {
            console.log(e);
            res.locals.globalError = e;
            res.render('users/register');
        }

        function errorHandler(e) {
            console.log(e);
            res.locals.globalError = e;
            res.render('users/register');
        }

    },
    logout: (req, res) => {
        req.logout();
        res.redirect('/');
    },
    loginGet: (req, res) => {
        res.render('users/login');
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
            res.render('users/login');
        }
    },
    profile: async (req, res) => {
        try {
            let total = 0;
            let count = 0;
            for (const ex of req.user.expenses) {
                let expense = await Expense.findById(ex);
                total += +expense.total;
            }

            res.render('users/profile', { count: req.user.expenses.length, total, amount: req.user.amount });
        } catch (e) {
            console.log(e);

        }
    },
    refill: async (req, res) => {
        try {
            req.user.amount += +req.query.sum;
            await req.user.save();
            res.redirect('back')

        } catch (e) {
            console.log(e);

        }
    }
};
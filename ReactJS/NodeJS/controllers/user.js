const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');

module.exports = {
    get: (req, res, next) => {
        models.User.find()
            .then((users) => res.send(users))
            .catch(next)
    },

    post: {
    register: async (req, res, next) => {
        const { username, password, image } = req.body;

        try {
            let user = await models.User.create({ username, password, image });

            if (username === 'Admin' && password === '1234567') {
                user.roles.push('Admin')
                await user.save()
                
            }
            res.send({ user, success: true })
        } catch (e) {
            console.log(e);
            res.send({ success: false })
        }



    },

        login: async (req, res, next) => {
            const { username, password } = req.body;
            models.User.findOne({ username })
                .then((user) => Promise.all([user, user.matchPassword(password)]))
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send({ success: false, error: 'There is no such User pleare get Register!' });
                        return;
                    }
                    const token = utils.jwt.createToken({ id: user._id });
                    res.cookie(config.authCookieName, token, { maxAge: 900000, httpOnly: true }).send({ token, user, success: true });
                })
                .catch(next);
        },

            logout: (req, res, next) => {
                const token = req.cookies[config.authCookieName];

                models.TokenBlacklist.create({ token })
                    .then(() => {
                        res.clearCookie(config.authCookieName).send({ success: true });
                    })
                    .catch(next);
            }
},

put: (req, res, next) => {
    const id = req.params.id;
    const { username, password } = req.body;
    models.User.update({ _id: id }, { username, password })
        .then((updatedUser) => res.send(updatedUser))
        .catch(next)
},

    delete: (req, res, next) => {
        const id = req.params.id;
        models.User.deleteOne({ _id: id })
            .then((removedUser) => res.send(removedUser))
            .catch(next)
    }
};
const passport = require('passport');
const Auth = require('../authorization/Auth');

module.exports = {
    get: {
        magicLink: async (req, res, next) => {
            const { type } = req.params;

            if (type === 'magic-link') {
                passport.authenticate('jwt', { session: false }, async function (err, user, message) {
                    if (err) {
                        return next(err);
                    }

                    if (!user) {
                        res.send({ success: false, message })
                    }

                    const _id = user._id;
                    const token = await Auth.generateAuthToken(_id);

                    delete user.password;
                    return res
                        .send({ token, user, success: true, message });
                })(req, res, next);
            } else {
                const email = type;

                const user = await Auth.findUser({ email });

                if (!user) {
                    return res.send({ success: false, message: 'Invalid Credentials!' });
                }
                const _id = user._id;

                const token = await Auth.generateAuthToken(_id);
                return res.send({ success: true, token, email });

                // Auth.sendEmail('snaikeee@abv.bg', 'confirm email', _id)
                // return res.send({success: true, message: 'we`ve send you magic link on your email address!' });
            }
        },
    },

    post: {
        register: (req, res, next) => {
            passport.authenticate('local-signup', { session: false }, async function (err, user, message) {
                if (err) {
                    return res.send({ message, success: false, err });
                }

                if (!user) {
                    return res.send({ message, success: false });
                }

                const _id = user._id;
                const token = await Auth.generateAuthToken(_id);            
                return res.send({ success: true, message, token });

                // Auth.sendEmail('snaikeee@abv.bg', 'confirm email', _id, 'register', password) 
            })(req, res, next);
        },

        login: (req, res, next) => {
            passport.authenticate('local-signin', { session: false }, async function (err, user, message) {
                if (err) {
                    return next(err);
                }

                if (!user) {
                    return res.send({ message, success: false });
                }
                const _id = user._id;
                const token = await Auth.generateAuthToken(_id);

                delete user.password;
                return res.send({ token, user, success: true, message });
            })(req, res, next);
        },

        logout: async (req, res, next) => {
            res.send({ success: true, message: 'Logout successfully!' })
        }
    },

    put: {
        updateUser: async (req, res, next) => {
            // изкарвам си _id и останалите данни
            const { _id, ...newUserData } = req.body;

            // трия парола и имейл за да не се презапишат ако са различни
            delete newUserData.password;
            delete newUserData.email;

            // намирам потребителя с текущите му данни
            let user = await Auth.findUser({ _id });

            // превръщам user от mongoose обект в js обект, презаписвам съвпадащите пропъртита и добавям ако има нови
            // тези които не съвпадат си остават същите
            user = user.assign(user.toObject(), newUserData);

            // пращаме user
            delete user.password;
            res.send({ user, success: true, message: 'User has been updated successfuly' });

        },
        changePassword: async (req, res, next) => {
            // праща ни се новата, старата парола и id на user
            const { oldPassword, newPassword, _id } = req.body;

            // търсим user
            const user = await Auth.findUser(_id);

            // проверяваме пратената ни парола съвпада ли с тази на user
            const isMatch = user.matchPassword(oldPassword);

            if (!isMatch) {
                // ако съвпада хешираме новата парола 
                const password = await Auth.generatePassword(newPassword);

                // и я заменяме със старата
                user.password = password;
                await user.save();

                res.send({ message: 'Your password has been changed successfuly!', success: true });
            }
        },
    },

    delete: (req, res, next) => {
        const message = 'Hello World';
        res.send({success: true, message});
    }
};
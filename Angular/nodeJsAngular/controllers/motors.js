const models = require('../models');

module.exports = {
    get: {
        getAll: async (req, res, next) => {
            try {
                let motors = await models.Motor.find()
                res.send(motors);
            } catch (e) {
                console.log(e);

            }
        },

        getOne: async (req, res, next) => {
            const id = req.params.id;

            try {
                let motor = await models.Motor.findById(id);
                res.send(motor)
            } catch (e) {
                console.log(e);

            }
        },
    },

    post: async (req, res, next) => {
        console.log('here');
        
        const { model, description, price, city, image, userId } = req.body;

        try {
            let user = await models.User.findById(userId);
            let motor = await models.Motor.create({
                image,
                model,
                description,
                price,
                city,
                likes: [user._id],
                creator: user._id
            });

            res.send({ motor, success: true });

        } catch (e) {
            res.send({ success: false })
            console.log(e);

        }
    },

    put: {
        edit: async (req, res, next) => {
            const motoID = req.params.id;
            const { image, model, description, price, city, likes, creator, isBanned } = req.body;

            try {
                let motor = await models.Motor.findById(motoID);
                motor.image = image;
                motor.model = model;
                motor.description = description;
                motor.price = price;
                motor.city = city;
                motor.likes = likes;
                motor.creator = creator;
                motor.isBanned = isBanned;

                await motor.save();
                res.send({ motor, success: true });

            } catch (e) {
                res.send({ success: false })
                console.log(e);

            }
        },

        banIt: async (req, res, next) => {
            try {
                const id = req.params.id;

                let motor = await models.Motor.findById(id)
                motor.isBanned = true;
                await motor.save();
                res.send({ motor, success: true })
            } catch (e) {
                res.send({ success: false })
                console.log(e);
            }
        },

        unban: async (req, res, next) => {
            try {
                const id = req.params.id;

                let motor = await models.Motor.findById(id)
                motor.isBanned = false;
                await motor.save();
                res.send({ motor, success: true })
            } catch (e) {
                res.send({ success: false })
                console.log(e);
            }
        },

        like: async (req, res, next) => {

            try {
                const id = req.params.id;
                const { userId } = req.body;
                let user = await models.User.findById(userId);
                let motor = await models.Motor.findById(id);
                motor.likes.push(user._id);

                await motor.save();
                res.send({ motor, success: true })
            } catch (e) {
                res.send({ success: false })
                console.log(e);
            }
        },
    },

    delete: async (req, res, next) => {
        const id = req.params.id;

        try {
            let motor = await models.Motor.deleteOne({ _id: id });
            res.send({ motor, success: true });
        } catch (e) {
            res.send({ success: false })
            console.log(e);

        }
    }
};
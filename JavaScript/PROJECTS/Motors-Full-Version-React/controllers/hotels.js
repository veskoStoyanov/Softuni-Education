const models = require('../models');

module.exports = {
    get: {
        getAll: async (req, res, next) => {
            try {
                let hotels = await models.Hotel.find()
                res.send(hotels);
            } catch (e) {
                console.log(e);

            }
        },

        getOne: async (req, res, next) => {
            const id = req.params.id;

            try {
                let hotel = await models.Hotel.findById(id);
                res.send(hotel)
            } catch (e) {
                console.log(e);

            }
        },
    },

    post: async (req, res, next) => {

        const { city, price, image, name } = req.body;

        try {
            let hotel = await models.Hotel.create({
                image,
                price,
                city,
                name
            });

            res.send({ hotel, success: true });

        } catch (e) {
            res.send({ success: false })
            console.log(e);

        }
    },


    book: async (req, res, next) => {
        try {
            const id = req.params.id;

            let { username } = req.body;
            
            let hotel = await models.Hotel.findById(id)

            if(!hotel.reservations.includes(username)) {
                hotel.reservations.push(username)
                await hotel.save();
                res.send({ hotel, success: true })
            }else{
                res.send({ success: false })
            console.log(e);
            }
            
        } catch (e) {
            res.send({ success: false })
            console.log(e);
        }
    },

    unbook: async (req, res, next) => {
        try {
            const id = req.params.id;
            const {username} = req.body;

            let hotel = await models.Hotel.findById(id)

            if(hotel.reservations.includes(username)) {
               hotel.reservations= hotel.reservations.filter(x => x !== username)
            }

                
            await hotel.save();
            res.send({ hotel, success: true })
        } catch (e) {
            res.send({ success: false })
            console.log(e);
        }
    },

    delete: async (req, res, next) => {
        const id = req.params.id;

        try {
            let hotel = await models.Hotel.deleteOne({ _id: id });
            res.send({ hotel, success: true });
        } catch (e) {
            res.send({ success: false })
            console.log(e);

        }
    }
};
const Hotel = require('../models/Hotel');

module.exports = {
    index: async (req, res) => {
        try {
            const hotels = await Hotel.find()
                .sort('-creationDate')
                .limit(20)


            res.render('home/index', { hotels });

        } catch (e) {
            console.log(e);

        }
    },
    about: (req, res) => {
        res.render('home/about');
    }
};
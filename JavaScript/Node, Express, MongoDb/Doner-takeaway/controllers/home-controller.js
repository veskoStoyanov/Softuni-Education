const Doner = require('../models/Doner');

module.exports = {
    index: async (req, res) => {

        try {
            let doners = await Doner.find({});

            let beefs = doners.filter((d) => {
                return d.category === 'Beef'
            });

            let chikens = doners.filter((d) => {
                return d.category === 'Chicken'
            });

            let lambs = doners.filter((d) => {
                return d.category === 'Lamb'
            });

            res.render('home/index', { chikens, lambs, beefs })


        } catch (e) {
            console.log(e);

        }


    }
};
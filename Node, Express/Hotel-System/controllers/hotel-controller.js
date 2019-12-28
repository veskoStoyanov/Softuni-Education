const Hotel = require('../models/Hotel');
const Comment = require('../models/Comment');

module.exports = {
    getCreate: (req, res) => {
        res.render('hotels/create');
    },
    postCreate: async (req, res) => {
        try {
            let data = req.body

            await Hotel.create({
                title: data.title,
                description: data.description,
                location: data.location,
                image: data.image,
                category: data.category,
                creator: req.user._id
            });

            res.redirect('/');
        } catch (e) {
            console.log(e);
        }
    },
    listAll: async (req, res) => {
        try {
            const hotels = await Hotel.find()
                .sort('-creationDate')
                .limit(20)

            res.render('hotels/listAll', { hotels });

        } catch (e) {
            console.log(e);
        }
    },
    getDetails: async (req, res) => {
        try {
            let selectedHotel = await Hotel.findById(req.params.id);

            const comments = await Comment.find({
                hotel: selectedHotel._id
            }).sort('-creationDate');

            selectedHotel.views += 1;
            await selectedHotel.save();

            res.render('hotels/details', { selectedHotel, comments });
        } catch (e) {
            console.log(e);

        }
    },
    addComment: async (req, res) => {
        try {
            const data = req.body;

            let comment = await Comment.create({
                title: data.title,
                comment: data.comment,
                hotel: req.params.id,
                creator: req.user.username
            })

            let hotel = await Hotel.findById(req.params.id);
            hotel.comments.push(comment._id)
            hotel.views -= 1;
            hotel.save();

            res.redirect(`/details/${hotel._id}`)
        } catch (e) {
            console.log(e);
        }
    },
    like: async (req, res) => {
        try {
            let hotel = await Hotel.findById(req.params.id);
            let userId = req.user._id;
            let index = hotel.likes.indexOf(userId);

            if (index >= 0) {
                hotel.likes.splice(index, 1)
            } else {
                hotel.likes.push(userId);
            }

            hotel.views -= 1;
            await hotel.save();

            res.redirect(`/details/${hotel._id}`)
        } catch (e) {
            console.log(e);
        }
    },
}
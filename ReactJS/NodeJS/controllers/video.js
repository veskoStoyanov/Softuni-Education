const models = require('../models');
const config = require('../config/config');

module.exports = {
    get: {
        getAll: async (req, res, next) => {
            try {
                let videos = await models.Video.find()
                res.send(videos);
            } catch (e) {
                console.log(e);
            }
        },

        getOne: async (req, res, next) => {
            const id = req.params.id;

            try {
                let video = await models.Video.findById(id);
                res.send(video)
            } catch (e) {
                console.log(e);

            }
        },
    },

    post: async (req, res, next) => {
        const { model, url, } = req.body;

        try {
            let video = await models.Video.create({
                url,
                model,
            });

            res.send({video, success: true});

        } catch (e) {
            console.log(e);

        }
    },

    put: async (req, res, next) => {
        const id = req.params.id;
        try {
            let video = await models.Video.findById(id);
            video.views += 1;
            await video.save();
            res.send(video);

        } catch (e) {
            console.log(e);

        }
    },

    delete: async (req, res, next) => {
        const id = req.params.id;

        try {
            let comments = await models.Comment.find();
            comments = comments.filter(any => any.videoId.toString() === id)

            for (const com of comments) {
                await models.Comment.deleteOne({ _id: com._id });
            }

            let video = await models.Video.deleteOne({ _id: id });
            res.send({video, success: true});
        } catch (e) {
            console.log(e);

        }
    }
};
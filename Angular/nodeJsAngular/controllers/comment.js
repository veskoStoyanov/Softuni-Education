const models = require('../models');

module.exports = {

    get: async (req, res, next) => {
        let videoId = req.params.id
        try {
            let allComments = await models.Comment.find();
            let comments = allComments.filter(any => any.videoId.toString() === videoId);
            res.send(comments)
        } catch (e) {
            console.log(e);

        }
    },


    post: async (req, res, next) => {
        let { content, videoId, userName } = req.body;

        try {
            let video = await models.Video.findById(videoId);
            let comment = await models.Comment.create({
                content,
                videoId: video._id,
                author: userName
            });
            res.send({comment, success: true})
        } catch (e) {
            res.send({success: false})
            console.log(e);

        }
    },

    delete: async (req, res, next) => {
        const id = req.params.id;

        try {
            let comment = await models.Comment.deleteOne({ _id: id });
            res.send({comment, success: true})
        } catch (e) {
            res.send({success: false})
            console.log(e);

        }
    }
}
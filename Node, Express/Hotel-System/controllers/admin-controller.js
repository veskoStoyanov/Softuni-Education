const Comment = require('../models/Comment');
const Hotel = require('../models/Hotel');

module.exports = {
    getEditComment: async (req, res) => {
        const id = req.params.id;
        try {
            let comment = await Comment.findById(id);

            res.render('comments/edit', { comment });
        } catch (e) {
            console.log(e);
        }
    },
    postEditComment: async (req, res) => {
        const text = req.body.comment;
        const commentId = req.params.id;
        try {
            let comment = await Comment.findById(commentId);
     
            comment.comment = text;
            await comment.save();

            res.redirect('/');

        } catch (e) {
            console.log(e);

        }
    },
    deleteComment: async (req, res) => {
        const id = req.params.id;
        try {
           let comment = await Comment.findById(id);
          await comment.remove();
           await comment.save()
            res.redirect('/')
        } catch (e) {
            console.log(e);

        }
    },
}
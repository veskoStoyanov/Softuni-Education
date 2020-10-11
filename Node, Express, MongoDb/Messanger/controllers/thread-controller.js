const Thread = require('../models/Thread');
const User = require('../models/User');
const Message = require('../models/Message');

module.exports = {
    findThread: async (req, res) => {
        try {

            let otherUser = await User.findOne({
                username: req.body.username
            });

            let thread = await Thread.findOne({
                users: {
                    $all: [otherUser._id, req.user._id]
                }
            })

            if (!thread) {
                await Thread.create({
                    users: [otherUser._id, req.user._id],
                })
            }

            res.redirect(`/thread/${otherUser.username}`)

        } catch (e) {
            console.log(e);
        }
    },
    getMessages: async (req, res) => {
        let currUser = req.user;

        try {
            let otherUser = await User.findOne({
                username: req.params.username
            })

            let thread = await Thread.findOne({
                users: {
                    $all: [currUser._id, otherUser._id]
                }
            })

            let messages = await Message.find({
                thread: thread._id,
            })

            messages.forEach((m) => {
                if (m.user.toString() === currUser._id.toString()) {
                    m.isMine = true;
                } else {
                    m.isMine = false;
                }

                if (m.content.startsWith('http') && m.content.endsWith('jpg')) {
                    m.isImage = true
                } else {
                    m.isImage = false
                }
            })

            let isBlocked = false;
            if (currUser.blockedUsers.includes(otherUser.username)) {
                isBlocked = true;
            }

            let youAreBlocked = false;
            if (otherUser.blockedUsers.includes(currUser.username)) {
                youAreBlocked = true;
            }

            res.render('users/chatroom', { messages, username: req.params.username, threadId: thread._id, isBlocked: isBlocked, youAreBlocked: youAreBlocked })

        } catch (e) {
            console.log(e);
        }
    },
    postMessage: async (req, res) => {
        let content = req.body.message;
        let thread = req.body.threadId;

        try {
            let user = await User.findOne({
                username: req.params.username
            })

            await Message.create({
                content,
                user: user._id,
                thread
            })

            res.redirect(`/thread/${user.username}`)

        } catch (e) {
            console.log(e);
        }
    },
    deleteThread: async (req, res) => {
        try {
            await Message.remove({
                thread: req.params.id
            });

            await Thread.findByIdAndRemove(req.params.id);

            res.redirect('/');
        } catch (e) {
            console.log(e);

        }

    }

}
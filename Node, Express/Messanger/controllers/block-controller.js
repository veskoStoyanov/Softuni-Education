module.exports = {
    blockUser: async (req, res) => {
        try {
            req.user.blockedUsers.push(req.params.username);
            await req.user.save();



            res.redirect(`/thread/${req.params.username}`)
        } catch (e) {
            console.log(e);
            
        }
    },
    unBlockUser: async (req, res) => {
        try {
            let index = req.user.blockedUsers.indexOf(req.params.username);
            req.user.blockedUsers.splice(index, 1);
            await req.user.save();



            res.redirect(`/thread/${req.params.username}`)
        } catch (e) {
            console.log(e);
            
        }
    }
}
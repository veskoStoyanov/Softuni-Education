module.exports = {
    isAuthed: (req, res, next) => {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.redirect('/login');
        }
    },
	isAnonymous: (req, res, next) => {
        if (!req.isAuthenticated()) {
            next();
        } else {
            res.redirect('/');
        }
    }
}
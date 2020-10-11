const controllers = require('../controllers');
const restrictedPages = require('./auth');

module.exports = app => {
    app.get('/', controllers.home.index);
    app.get('/register', restrictedPages.isAnonymous, controllers.user.registerGet);
    app.post('/register', restrictedPages.isAnonymous, controllers.user.registerPost);
    app.get('/logout', restrictedPages.isAuthed, controllers.user.logout);
    app.get('/login', restrictedPages.isAnonymous, controllers.user.loginGet);
    app.post('/login', restrictedPages.isAnonymous, controllers.user.loginPost);

    app.get('/create', restrictedPages.isAuthed, controllers.expense.getCreate);
    app.post('/create', restrictedPages.isAuthed, controllers.expense.postCreate);
    app.get('/report/:id', restrictedPages.isAuthed, controllers.expense.report);
    app.get('/remove/:id', restrictedPages.isAuthed, controllers.expense.remove);
    app.get('/profile', restrictedPages.isAuthed, controllers.user.profile);
    app.get('/refill', restrictedPages.isAuthed, controllers.user.refill);


    app.all('*', (req, res) => {
        res.render('home/notFound')
    });
};
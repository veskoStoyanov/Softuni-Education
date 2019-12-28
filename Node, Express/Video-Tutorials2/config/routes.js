const controllers = require('../controllers');
const restrictedPages = require('./auth');

module.exports = app => {
    app.get('/', controllers.home.index);
    app.get('/register', restrictedPages.isAnonymous, controllers.user.registerGet);
    app.post('/register', restrictedPages.isAnonymous, controllers.user.registerPost);
    app.post('/logout', restrictedPages.isAuthed, controllers.user.logout);
    app.get('/login', restrictedPages.isAnonymous, controllers.user.loginGet);
    app.post('/login', restrictedPages.isAnonymous, controllers.user.loginPost);

    app.get('/create', restrictedPages.isAuthed, controllers.course.getCreate);
    app.post('/create', restrictedPages.isAuthed, controllers.course.postCreate);
    app.get('/details/:id', restrictedPages.isAuthed, controllers.course.details);
    app.get('/enroll/:id', restrictedPages.isAuthed, controllers.course.enroll);
    app.get('/edit/:id', restrictedPages.isAuthed, controllers.course.getEdit);
    app.post('/edit/:id', restrictedPages.isAuthed, controllers.course.postEdit);
    app.get('/delete/:id', restrictedPages.isAuthed, controllers.course.remove);
    app.get('/search', restrictedPages.isAuthed, controllers.home.search);

    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};
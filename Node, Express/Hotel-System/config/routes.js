const controllers = require('../controllers');
const restrictedPages = require('./auth');

module.exports = app => {
    app.get('/loginRegister', restrictedPages.isAnonymous, controllers.user.loginRegister);
    app.get('/', controllers.home.index);
    app.post('/register', restrictedPages.isAnonymous, controllers.user.registerPost);
    app.post('/logout', restrictedPages.isAuthed, controllers.user.logout);
    app.post('/login', restrictedPages.isAnonymous, controllers.user.loginPost);
    //hotel
    app.get('/about', controllers.home.about);
    app.get('/hotel/create', restrictedPages.isAuthed, controllers.hotel.getCreate);
    app.post('/hotel/create', restrictedPages.isAuthed, controllers.hotel.postCreate);
    app.get('/list', controllers.hotel.listAll);
    app.get('/details/:id', controllers.hotel.getDetails);
    app.post('/comment/:id', controllers.hotel.addComment);
    app.get('/details/like/:id', restrictedPages.isAuthed, controllers.hotel.like);
    app.get('/listInfo', restrictedPages.isAuthed, controllers.user.getListInfo);
    app.post('/listInfo', restrictedPages.isAuthed, controllers.user.postListInfo);

    app.get('/edit/comment/:id', restrictedPages.hasRole('Admin'), controllers.admin.getEditComment);
    app.post('/edit/comment/:id', restrictedPages.hasRole('Admin'), controllers.admin.postEditComment);
    app.post('/delete/comment/:id', restrictedPages.hasRole('Admin'), controllers.admin.deleteComment);

    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};
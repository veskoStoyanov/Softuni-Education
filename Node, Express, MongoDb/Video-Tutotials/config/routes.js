const controllers = require('../controllers');
const restrictedPages = require('./auth');

module.exports = app => {
    app.get('/', controllers.home.index);
    app.get('/register', restrictedPages.isAnonymous, controllers.user.registerGet);
    app.post('/register', restrictedPages.isAnonymous, controllers.user.registerPost);
    app.post('/logout', restrictedPages.isAuthed, controllers.user.logout);
    app.get('/login', restrictedPages.isAnonymous, controllers.user.loginGet);
    app.post('/login', restrictedPages.isAnonymous, controllers.user.loginPost);

    app.get('/course/create', restrictedPages.hasRole('Admin'), controllers.adminPanel.getCreate);
    app.post('/course/create', restrictedPages.hasRole('Admin'), controllers.adminPanel.postCreate);
    app.get('/course/edit/:id', restrictedPages.hasRole('Admin'), controllers.adminPanel.getEdit);
    app.post('/course/edit/:id', restrictedPages.hasRole('Admin'), controllers.adminPanel.postEdit)
    app.get('/admin/panel/:id', restrictedPages.hasRole('Admin'), controllers.adminPanel.getAdminPanel);
    app.post('/create/lecture/:id', restrictedPages.hasRole('Admin'), controllers.adminPanel.postCreateLecture);
    app.get('/delete/lecture/:id', restrictedPages.hasRole('Admin'), controllers.adminPanel.deleteLecture);
    app.get('/details/course/:id', restrictedPages.isAuthed, controllers.course.getDetailsCourse);
    app.post('/enroll/course/:id', restrictedPages.isAuthed, controllers.course.enrollCourse);
    app.get('/play/:id', restrictedPages.isAuthed, controllers.course.getPlay);
    app.get('/search', restrictedPages.isAuthed, controllers.course.search);

    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};
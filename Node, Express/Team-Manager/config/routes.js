const controllers = require('../controllers');
const restrictedPages = require('./auth');

module.exports = app => {
    app.get('/', controllers.home.index);
    app.get('/register', restrictedPages.isAnonymous, controllers.user.registerGet);
    app.post('/register', restrictedPages.isAnonymous, controllers.user.registerPost);
    app.post('/logout', restrictedPages.isAuthed, controllers.user.logout);
    app.get('/login', restrictedPages.isAnonymous, controllers.user.loginGet);
    app.post('/login', restrictedPages.isAnonymous, controllers.user.loginPost);

    app.get('/team/create', restrictedPages.hasRole('Admin'), controllers.team.getCreateTeam);
    app.post('/team/create', restrictedPages.hasRole('Admin'), controllers.team.postCreateTeam);
    app.get('/project/create', restrictedPages.hasRole('Admin'), controllers.project.getCreateProject);
    app.post('/project/create', restrictedPages.hasRole('Admin'), controllers.project.postCreateProject);

    app.get('/projects', (restrictedPages.isAnonymous && restrictedPages.isAuthed), controllers.project.getProjects);
    app.post('/projects', restrictedPages.hasRole('Admin'), controllers.project.postProjects);

    app.get('/teams',(restrictedPages.isAnonymous && restrictedPages.isAuthed), controllers.team.getTeams);
    app.post('/teams', restrictedPages.hasRole('Admin'), controllers.team.postTeams);

    app.get('/profile', restrictedPages.isAuthed, controllers.user.profile);
    app.get('/leave', restrictedPages.isAuthed, controllers.team.leave);

    app.get('/searchTeam', restrictedPages.isAuthed, controllers.team.search);
    app.get('/searchProject', restrictedPages.isAuthed, controllers.project.search);


    app.get('team/create')
    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};
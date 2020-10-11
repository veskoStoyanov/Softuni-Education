const controllers = require('../controllers');
const restrictedPages = require('./auth');

module.exports = app => {
    app.get('/', controllers.home.index);
    app.get('/register', controllers.user.registerGet);
    app.post('/register', controllers.user.registerPost);
    app.post('/logout', controllers.user.logout);
    app.get('/login', controllers.user.loginGet);
    app.post('/login', controllers.user.loginPost);

    app.get('/article/create', controllers.article.createArticleGet);
    app.post('/article/create', controllers.article.createArticlePost);
    app.get('/all/articles', controllers.article.listAll);
    app.get('/article/details/:id', controllers.article.articlesDetails);
    app.get('/edit/article/:id', controllers.article.getArticleEdit);
    app.post('/edit/article/:id', controllers.article.postArticleEdit);
    app.get('/history/:id', controllers.article.history);
    app.get('/article/lock/:id', controllers.article.lock);
    app.get('/article/unlock/:id', controllers.article.unlock);
    app.get('/search', controllers.home.search);
    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};
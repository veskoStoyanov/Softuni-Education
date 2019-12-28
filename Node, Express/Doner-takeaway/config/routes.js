const controllers = require('../controllers');
const restrictedPages = require('./auth');

module.exports = app => {
    app.get('/', controllers.home.index);
    app.get('/register', restrictedPages.isAnonymous, controllers.user.registerGet);
    app.post('/register', restrictedPages.isAnonymous, controllers.user.registerPost);
    app.post('/logout', restrictedPages.isAuthed, controllers.user.logout);
    app.get('/login', restrictedPages.isAnonymous, controllers.user.loginGet);
    app.post('/login', restrictedPages.isAnonymous, controllers.user.loginPost);

    //product
    app.get('/product/create', restrictedPages.hasRole('Admin'), controllers.product.getCreate);
    app.post('/product/create', restrictedPages.hasRole('Admin'), controllers.product.postCreate);
    app.get('/product/order/:id', restrictedPages.isAuthed, controllers.product.getOrder);
    app.post('/product/order/:id', restrictedPages.isAuthed, controllers.product.postOrder);
    app.get('/order/status', restrictedPages.isAuthed, controllers.product.orderStatus);
    app.get('/order/details/:id', restrictedPages.isAuthed, controllers.product.orderDetails);
    app.get('/order/edit', restrictedPages.hasRole('Admin'), controllers.admin.getEdit);
    app.post('/order/edit', restrictedPages.hasRole('Admin'), controllers.admin.postEdit);
    app.get('/product/delete/:id', restrictedPages.hasRole('Admin'), controllers.admin.productDelete);


    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};
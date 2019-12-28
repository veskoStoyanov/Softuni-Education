const restrictedPages = require('./auth');
const homeController = require('../controllers/home');
const userController = require('../controllers/user');
const carsController = require('../controllers/car');

module.exports = app => {
    app.get('/', homeController.index);
    app.get('/user/register', userController.registerGet);
    app.post('/user/register', userController.registerPost);
    app.get('/user/login', userController.loginGet);
    app.post('/user/login', userController.loginPost);
    app.post('/user/logout', userController.logout);

    app.get('/car/add', restrictedPages.hasRole('Admin'), carsController.addGet);
    app.post('/car/add', restrictedPages.hasRole('Admin'), carsController.addPost);
    app.get('/car/all', carsController.allCars);
    app.get('/car/rent/:id', restrictedPages.isAuthed, carsController.rentGet);
    app.post('/car/rent/:id', restrictedPages.isAuthed, carsController.rentPost);



    app.get('/car/edit/:id', restrictedPages.hasRole('Admin'), carsController.editGet);
    app.post('/car/edit/:id', restrictedPages.hasRole('Admin'), carsController.editPost);

    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};
const router = require('../routes/');

module.exports = (app) => {

    app.use('/api/user', router.user);
    app.use('/api/motors', router.motors);
    app.use('/api/contact', router.contact);
    app.use('/api/video', router.video);
    app.use('/api/comment', router.comment);
    app.use('/api/hotels', router.hotels);

    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
};
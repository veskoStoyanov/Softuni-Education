
const passport = require('passport');
const controllers = require('../controllers/');
const router = require('express').Router();

router.post('/register', controllers.user.post.register);

router.post('/login/:type', controllers.user.post.login);

router.get('/login/:type', controllers.user.get.magicLink)

router.post('/logout', controllers.user.post.logout);

router.put('/:id', controllers.user.put.updateUser);

router.put('/:id', controllers.user.put.changePassword);

router.get('/delete',passport.authenticate('jwt', { session: false }),  controllers.user.delete);
// passport.authenticate('jwt', { session: false }),
module.exports = router;

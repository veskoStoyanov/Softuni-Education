const controllers = require('../controllers/');
const router = require('express').Router();
const {auth} = require('../utils');


router.get('/', controllers.user.get);

router.post('/register', controllers.user.post.register);

router.post('/login', controllers.user.post.login);

router.post('/logout',auth(), controllers.user.post.logout);



module.exports = router;
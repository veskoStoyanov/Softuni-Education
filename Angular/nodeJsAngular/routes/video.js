const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.video.get.getAll);
router.get('/:id', controllers.video.get.getOne);
router.post('/',  controllers.video.post);
router.put('/:id',  controllers.video.put);
router.delete('/:id',  controllers.video.delete);

module.exports = router;
const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', auth(), controllers.video.get.getAll);
router.get('/:id', auth(), controllers.video.get.getOne);
router.post('/', auth(), controllers.video.post);
router.put('/:id', auth(), controllers.video.put);
router.delete('/:id', auth(), controllers.video.delete);

module.exports = router;
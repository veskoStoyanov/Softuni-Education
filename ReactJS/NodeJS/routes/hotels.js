const controllers = require('../controllers/');
const router = require('express').Router();
const {auth}  = require('../utils');

router.get('/',auth(), controllers.hotels.get.getAll);
router.get('/:id', auth(), controllers.hotels.get.getOne);
router.post('/', auth(), controllers.hotels.post);
router.put('/book/:id', auth(), controllers.hotels.book);
router.put('/unbook/:id', auth(), controllers.hotels.unbook);
router.delete('/:id', auth(), controllers.hotels.delete);

module.exports = router;
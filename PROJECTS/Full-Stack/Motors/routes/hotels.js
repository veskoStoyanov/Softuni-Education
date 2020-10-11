const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/', controllers.hotels.get.getAll);
router.get('/:id', controllers.hotels.get.getOne);
router.post('/',  controllers.hotels.post);
router.put('/book/:id', controllers.hotels.book);
router.put('/unbook/:id',  controllers.hotels.unbook);
router.delete('/:id',  controllers.hotels.delete);

module.exports = router;
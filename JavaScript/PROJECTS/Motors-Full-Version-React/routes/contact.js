const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/', controllers.contact.get.getAll);
router.get('/:id',controllers.contact.get.getOne);
router.post('/', controllers.contact.post);
router.put('/',  controllers.contact.put)
router.delete('/:id', controllers.contact.delete);

module.exports = router;
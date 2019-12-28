const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', auth(), controllers.contact.get.getAll);
router.get('/:id', auth(), controllers.contact.get.getOne);
router.post('/', auth(), controllers.contact.post);
router.put('/', auth(), controllers.contact.put)
router.delete('/:id', auth(), controllers.contact.delete);

module.exports = router;
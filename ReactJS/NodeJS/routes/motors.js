const controllers = require('../controllers/');
const router = require('express').Router();
const {auth}  = require('../utils');

router.get('/',auth(), controllers.motors.get.getAll);
router.get('/:id', auth(), controllers.motors.get.getOne);
router.post('/', auth(), controllers.motors.post);
router.put('/:id', auth(), controllers.motors.put.edit);
router.put('/ban/:id', auth(), controllers.motors.put.banIt);
router.put('/unban/:id', auth(), controllers.motors.put.unban);
router.put('/like/:id', auth(), controllers.motors.put.like);
router.delete('/:id', auth(), controllers.motors.delete);

module.exports = router;
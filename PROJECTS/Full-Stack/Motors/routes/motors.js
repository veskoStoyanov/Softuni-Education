const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/', controllers.motors.get.getAll);
router.get('/:id',  controllers.motors.get.getOne);
router.post('/',  controllers.motors.post);
router.put('/:id',  controllers.motors.put.edit);
router.put('/ban/:id',  controllers.motors.put.banIt);
router.put('/unban/:id',  controllers.motors.put.unban);
router.put('/like/:id',  controllers.motors.put.like);
router.delete('/:id',  controllers.motors.delete);

module.exports = router;
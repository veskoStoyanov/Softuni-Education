const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/:id', controllers.comment.get);
router.post('/', controllers.comment.post);
router.delete('/:id', controllers.comment.delete);

module.exports = router;
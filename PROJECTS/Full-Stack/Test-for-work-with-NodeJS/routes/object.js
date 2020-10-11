const controllers = require("../controllers/");
const router = require("express").Router();

router.get("/", controllers.object.getAll);
router.put("/increase/:id", controllers.object.increase);
router.put("/decrease/:id", controllers.object.decrease);

module.exports = router;

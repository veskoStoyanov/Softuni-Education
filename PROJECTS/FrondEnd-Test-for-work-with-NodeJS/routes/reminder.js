const controllers = require("../controllers/");
const router = require("express").Router();

router.get("/", controllers.reminder.getAll);
router.post("/", controllers.reminder.post);

module.exports = router;

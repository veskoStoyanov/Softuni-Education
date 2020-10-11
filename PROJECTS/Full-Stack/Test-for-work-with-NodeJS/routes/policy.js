const controllers = require("../controllers/");
const router = require("express").Router();

router.get("/", controllers.policies.get.getAll);
router.get("/:id", controllers.policies.get.getOne);
router.post("/", controllers.policies.post);
router.put("/:id", controllers.policies.put.edit);
router.delete("/:id", controllers.policies.delete);

module.exports = router;

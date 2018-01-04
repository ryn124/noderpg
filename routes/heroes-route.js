var express = require('express');
var router = express.Router();

var heroesController = require ("../controllers/heroes-controller");
var middleware = require("../middleware/custom");

router.get("/", heroesController.index);
router.get("/:id", heroesController.show);
router.post("/", middleware.isHero, middleware.capName, middleware.randomWeapon, heroesController.create);
router.put("/:id", heroesController.update);
router.delete("/:id", heroesController.destroy);

module.exports = router;
var express = require('express');
var router = express.Router();
var monstersController = require("../controllers/monster-controller")
router.get("/", monstersController.index);
router.get("/:id", monstersController.show);
router.put("/:id", monstersController.update)
router.post("/", monstersController.create);
router.delete("/:id", monstersController.destroy)

module.exports = router;
/* Import des modules necessaires */
const express = require("express");
const router = express.Router();

const sauceCtrl = require("../controllers/sauce.controller");

const GuardAuth = require("../middleware/guardAuth");
const GuardMulter = require("../middleware/guardMulter");

/* Routage Sauce */
router.get("/", GuardAuth, sauceCtrl.getAllSauce);
router.get("/:id", GuardAuth, sauceCtrl.getOneSauce);
router.post("/", GuardAuth, GuardMulter, sauceCtrl.createSauce);
router.delete("/:id", GuardAuth, sauceCtrl.deleteSauce);
router.put("/:id", GuardAuth, GuardMulter, sauceCtrl.modifySauce);
router.post("/:id/like", GuardAuth, sauceCtrl.likeDislikeSauce);

module.exports = router;
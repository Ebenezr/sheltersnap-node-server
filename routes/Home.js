const express = require("express");
const router = express.Router();

const HomeController = require("../controllers/HomesController");

router.get("/", HomeController.index);
router.post("/show", HomeController.show);
router.post("/store", HomeController.store);
router.post("/update", HomeController.update);
router.post("/delete", HomeController.destroy);

module.exports = router;

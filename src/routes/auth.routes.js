const express = require("express");

const router = express.Router();
const controller = require("../controller/auth.controller");


router.post("/register", controller.registerController);
router.post("/login", controller.loginController)

module.exports = router;

var express = require('express');
var router = express.Router();
// Just for reference
// let authController = require("../controller/auth_controller");
// router.post("/signup", authController.signup);

let authController = require("../controller/index");

router.post("/signup", authController.auth.signup);
router.post("/signin", authController.auth.signin);




module.exports = router;
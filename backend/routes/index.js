var express = require("express");
var path = require("path");
var router = express.Router();
let authRoutes = require("./auth_routes");

router.use("/auth", authRoutes);

router.get("*", function (req, res) {
  res.send({code: 200, message:"Server Running Successfully Zain Bhai!"})
});

module.exports = router;

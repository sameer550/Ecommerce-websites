var express = require("express");
var router = express.Router();
var userRegistrationConytroller = require("../controller/userRegistration.controller");

router.post("/signup", userRegistrationConytroller.createUser);
router.post("/login", userRegistrationConytroller.getAllUsers);
// router.get(":id", userRegistrationConytroller.getUserByEmail);

module.exports = {
  router,
};

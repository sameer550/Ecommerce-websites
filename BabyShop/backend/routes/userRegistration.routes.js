var express = require("express");
var router = express.Router();
var userRegistrationConytroller = require("../controller/userRegistration.controller");

router.post("/", userRegistrationConytroller.createUser);
router.get("/", userRegistrationConytroller.getAllUsers);
router.get(":id", userRegistrationConytroller.getUserByEmail);

module.exports = {
  router,
};

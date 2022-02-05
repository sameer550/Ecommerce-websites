var express = require("express");
var router = express.Router();
var userRegistrationConytroller = require("../controller/userRegistration.controller");

router.post("/", userRegistrationConytroller.createUser);

module.exports = {
  router,
};

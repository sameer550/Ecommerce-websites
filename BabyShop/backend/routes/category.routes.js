var express = require("express");
var router = express.Router();
var categoryController = require("../controller/category.controller");

router.post("/", categoryController.createCategory);
router.get("/",categoryController.getCategories)

module.exports = {
  router,
};

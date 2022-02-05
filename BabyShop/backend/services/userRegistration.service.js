const userModel = require("../models/userRegistration.model");
const post = (data) => {
  const model = new userModel(data);
  return model.save();
};

module.exports = { post };

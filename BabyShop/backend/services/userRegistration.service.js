const userModel = require("../models/userRegistration.model");
const post = (data) => {
  const model = new userModel(data);
  return model.save();
};

const getByEmail = (email, password) => {
  return userModel.findOne({ email, password });
};

const get = () => {
  return userModel.find();
};

module.exports = { post, getByEmail, get };

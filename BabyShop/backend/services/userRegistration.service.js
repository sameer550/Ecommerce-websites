const userModel = require("../models/userRegistration.model");
const bcrypt = require("bcryptjs");
const post = async (data) => {
  console.log("new Data ", data);
  try {
    const user = await userModel.findOne({ email: data.email });
    console.log("user1", user);
    if (!user) {
      const hashPassword = await bcrypt.hash(data.password, 12);
      data = { ...data, password: hashPassword };
      const model = new userModel(data);
      return model.save();
    } else {
      console.log("usseeer", user);
      return new Promise((_, reject) => {
        reject({
          statusCode: 409,
          message: "email already exists ",
        });
      });
    }
  } catch (err) {
    console.log("eerrr1");
    return new Promise((_, reject) => {
      reject(err);
    });
  }
};

const getByEmail = (email, password) => {
  return userModel.findOne({ email });
};

const get = () => {
  return userModel.find();
};

module.exports = { post, getByEmail, get };

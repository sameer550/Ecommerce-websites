const categoryModel = require("../models/category.model");
const post = (data) => {
  const model = new categoryModel(data);
  return model.save();
};
const get = () => {
    
    return categoryModel.find();
  };
  

module.exports = { post,get };

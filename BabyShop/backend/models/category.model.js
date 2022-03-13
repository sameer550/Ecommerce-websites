const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = Schema(
  {
    name: {
      type: String,
      required:true,
    },
    image: {
      type: String,
    },
    status: {
      type: String,
      required:true,
    }, 
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", schema);
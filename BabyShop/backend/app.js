var express = require("express");
const mongoose = require("mongoose");
const userRegistrationRoutes = require("./routes/userRegistration.routes");
const categoryRoutes = require("./routes/category.routes");

const bodyParser = require("body-parser");

// var cors = require("cors");

// middleware

var app = express();

mongoose.connect(
  "mongodb+srv://hamza:123@cluster0.bbxne.mongodb.net/ecommerce-web?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
// view engine setup

app.use(bodyParser.json());
app.use("/api/v1/users", userRegistrationRoutes.router);
app.use("/api/v1/category", categoryRoutes.router);

app.get("/", (req, res) => {
  res.send("done");
});
app.listen(4000, () => {
  console.log("connected");
});

module.exports = app;

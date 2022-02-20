var express = require("express");
const mongoose = require("mongoose");
const userRegistrationRoutes = require("./routes/userRegistration.routes");
const bodyParser = require("body-parser");
// const cors = require("cors");

// var cors = require("cors");

// middleware

var app = express();
// app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

mongoose.connect(
  "mongodb+srv://hamza:123@cluster0.bbxne.mongodb.net/ecommerce-web?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
// view engine setup

app.use(bodyParser.json());
app.use("/api/v1/users", userRegistrationRoutes.router);

app.get("/", (req, res) => {
  res.send("done");
});
app.listen(4000, () => {
  console.log("connected");
});

module.exports = app;

const { default: axios } = require("axios");
const userRegistration = require("../services/userRegistration.service");
const bcrypt = require("bcryptjs");

exports.createUser = async (req, res, next) => {
  const body = req.body;
  console.log("body", req.body);
  console.log("new body");
  userRegistration
    .post(body)
    .then(() => {
      res.status(201).send({ data: "created successfully" });
    })
    .catch((error) => {
      console.log("error", error);
      if (error.statusCode) {
        res.status(409).send({ message: error.message });
      } else {
        res.send({ message: "something went wrong " });
      }
    });
};
exports.getUserByEmail = async (req, res) => {
  // userRegistration
  //   .getByEmail(req.body.email)
  //   .then((response) => {
  //     console.log("response", response);
  //   })
  //   .catch((error) => {
  //     res.send({ message: "Something went wrong " });
  //   });
};
exports.getAllUsers = async (req, res) => {
  console.log(req.session.isLoggedIn);
  req.session.isLoggedIn = true;
  userRegistration
    .getByEmail(req.body.email, req.body.password)
    .then(async (response) => {
      console.log("RESPONSE", response);
      if (response) {
        const chkPassword = await bcrypt.compare(
          req.body.password,
          response.password
        );
        console.log("comparePassword", chkPassword);
        if (chkPassword) {
          res.status(200).send({ data: response });
        }
      }
      res.status(404).send({ message: "Incorrect username or password" });
    })
    .catch((error) => {
      res.send({ message: "Something went wrong " });
    });
};

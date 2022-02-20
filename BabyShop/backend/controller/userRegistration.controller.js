const { default: axios } = require("axios");
const userRegistration = require("../services/userRegistration.service");
exports.createUser = async (req, res) => {
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
      res.send({ data: "some error occured" });
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
  userRegistration
    .getByEmail(req.body.email, req.body.password)
    .then((response) => {
      console.log("RESPONSE", response);
      if (!response) {
        res.status(404).send({ message: "Incorrect username or password" });
      } else {
        res.status(200).send({ data: response });
      }
      // res.send({})
    })
    .catch((error) => {
      res.send({ message: "Something went wrong " });
    });
};

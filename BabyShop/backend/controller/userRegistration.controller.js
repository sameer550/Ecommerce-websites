const userRegistration = require("../services/userRegistration.service");
exports.createUser = async (req, res) => {
  const body = req.body;
  console.log("body", req.body);
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

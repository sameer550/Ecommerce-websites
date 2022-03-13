const categoryService = require("../services/category.service");
exports.createCategory = async (req, res) => {
  const body = req.body;
  categoryService
    .post(body)
    .then(() => {
      res.status(201).send({ data: "created successfully" });
    })
    .catch((error) => {
      res.send({ message: "some error occured" });
    });
};

exports.getCategories = async (req, res) => {
    console.log("body", req.body);
    categoryService
      .get()
      .then((response) => {
        res.status(200).send({ response  });
      })
      .catch((error) => {
        console.log("error", error);
        res.send({ data: "some error occured" });
      });
  };
  
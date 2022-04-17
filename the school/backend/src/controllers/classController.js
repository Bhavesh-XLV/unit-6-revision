const Classes = require("../models/class.model");

const postClass = async (req, res) => {
  try {
    const Class = await Classes.create(req.body);
    return res.status(201).send(Class);
  } catch (error) {
    return res.status(500).send({
      message: "Email Enter valid detail",
    });
  }
};

const getClass = async (req, res) => {
  try {
    const Class = await Classes.find().lean().exec();
    return res.status(201).send(Class);
  } catch (error) {
    return res.status(500).send({
      message: "Email Enter valid detail",
    });
  }
};

module.exports = { postClass, getClass };

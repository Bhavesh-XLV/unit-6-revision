const Teacher = require("../models/teacher.model");

const allTeacher = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const size = req.query.size || 4;
    // const totalPages = Math.ceil()
    const teacher = await Teacher.find()
      .skip((page - 1) * size)
      .limit(size)
      .lean()
      .exec();
    return res.status(201).send(teacher);
  } catch (error) {
    return res.status(500).send({
      message: "Some Server Issue",
    });
  }
};

const sortHigh = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const size = req.query.size || 4;

    const teacher = await Teacher.find()
      .sort({ age: -1 })
      .skip((page - 1) * size)
      .limit(size)
      .lean()
      .exec();
    return res.status(201).send(teacher);
  } catch (error) {
    return res.status(500).send({
      message: "Some Server Issue",
    });
  }
};

const sortLow = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const size = req.query.size || 4;

    const teacher = await Teacher.find()
      .sort({ age: 1 })
      .skip((page - 1) * size)
      .limit(size)
      .lean()
      .exec();
    return res.status(201).send(teacher);
  } catch (error) {
    return res.status(500).send({
      message: "Some Server Issue",
    });
  }
};

const filMale = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const size = req.query.size || 4;

    const teacher = await Teacher.find({ gender: "male" })
      .skip((page - 1) * size)
      .limit(size)
      .lean()
      .exec();
    return res.status(201).send(teacher);
  } catch (error) {
    return res.status(500).send({
      message: "Some Server Issue",
    });
  }
};

const filFemale = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const size = req.query.size || 4;

    const teacher = await Teacher.find({ gender: "female" })
      .skip((page - 1) * size)
      .limit(size)
      .lean()
      .exec();
    return res.status(201).send(teacher);
  } catch (error) {
    return res.status(500).send({
      message: "Some Server Issue",
    });
  }
};
const addTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.create(req.body);
    return res.status(201).send(teacher);
  } catch (error) {
    return res.status(500).send({
      message: "Email Enter valid detail",
    });
  }
};

module.exports = {
  addTeacher,
  allTeacher,
  sortHigh,
  sortLow,
  filMale,
  filFemale,
};

const Teacher = require("../models/teacher.model");

const allTeacher = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const size = req.query.size || 4;
    // const totalPages = Math.ceil()
    const teacher = await Teacher.find({ school_id: req.params.school_id })
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

const search = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const size = req.query.size || 4;
    const regex = new RegExp(req.params.name, "i");
    const teacher = await Teacher.find({
      $and: [{ school_id: req.params.school_id }, { name: regex }],
    })
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

    const teacher = await Teacher.find({ school_id: req.params.school_id })
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

    const teacher = await Teacher.find({ school_id: req.params.school_id })
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

    const teacher = await Teacher.find({
      $and: [{ gender: "male" }, { school_id: req.params.school_id }],
    })
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

    const teacher = await Teacher.find({
      $and: [{ gender: "female" }, { school_id: req.params.school_id }],
    })
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
  search,
};

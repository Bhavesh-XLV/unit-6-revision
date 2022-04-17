const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  classes: { type: String, required: true },
});

module.exports = mongoose.model("Teacher", teacherSchema);

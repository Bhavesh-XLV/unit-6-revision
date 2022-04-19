const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  school_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Classes",
    required: true,
  },
  name: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  classes: { type: Number },
});

module.exports = mongoose.model("Teacher", teacherSchema);

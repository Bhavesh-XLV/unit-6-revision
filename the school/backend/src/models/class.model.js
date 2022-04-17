const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  teacher_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: true,
  },
  class_time: { type: String, require: true },
  subject: { type: String, require: true },
});

module.exports = mongoose.model("Classes", classSchema);

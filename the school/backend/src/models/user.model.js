const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  school_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.methods.token = async function () {
  try {
    const token = jwt.sign({ _id: this._id }, "hello");
    return token;
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = mongoose.model("User", userSchema);

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// userSchema.pre("save", function (next) {
//   if (!this.isModified("password")) return next();
//   var hash = bcrypt.hashSync(this.password, 8);
//   this.password = hash;
//   return next();
// });

// userSchema.methods.checkPassword = function (password) {
//   return bcrypt.compareSync((password, this.password));
// };

userSchema.methods.token = async function () {
  try {
    const token = jwt.sign({ _id: this._id }, "mynameis", { expiresIn: "1h" });
    return token;
  } catch (error) {
    console.log("error", error);
  }
};

const User = mongoose.model("User", userSchema);
module.exports = User;

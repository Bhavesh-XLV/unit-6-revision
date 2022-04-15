const User = require("../models/user.model");
const cookieParser = require("cookie-parser");

const registerUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const Token = await user.token();
    res.cookie(`Cookie token name`, Token, {
      expires: new Date("01 12 2022"),
      secure: true,
      httpOnly: true,
    });

    return res.send({ user, Token });
  } catch (error) {
    return res.send("error", error);
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    // const match = user.checkPassword(req.body.password);
    if (!user) {
      return res.send("error", error);
    }
    const Token = await user.token();
    return res.send({ user, Token });
  } catch (error) {
    return res.send("error", error);
  }
};

module.exports = { registerUser, loginUser };

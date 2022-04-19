const User = require("../models/user.model");

const registerUser = async (req, res) => {
  try {
    const email = await User.findOne({ email: req.body.email });
    if (email) {
      return res.status(500).send({
        message: "Email already taken",
      });
    }
    const user = await User.create(req.body);
    const Token = await user.token();
    res.cookie(`Cookie token name`, Token, {
      httpOnly: true,
    });
    return res.status(201).send({ user, Token });
  } catch (error) {
    return res.status(500).send({
      message: "Email Enter valid detail",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (!user) {
      return res.status(400).send({
        message: "please enter valid detail",
      });
    }

    const Token = await user.token();
    return res.send({ user, Token });
  } catch (error) {
    return res.status(400).send({
      message: "please enter valid detail",
    });
  }
};

module.exports = { registerUser, loginUser };

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const User = require("../models/user.model");
require("dotenv").config();

const webtoken = (User) => {
  return jwt.sign({ User }, process.env.jwt_web_token);
};
const register = async (req, res) => {
  try {
    let users = await User
      .find({ email: req.body.email })
      .lean()
      .exec();
    if (manager === req.body.email) 
    {
      res.send({ message: "your mail ID is already in use" });
    } else {
      users = await User.create(req.body);
    }
    let token = webtoken(User);
    res.send({ User, token });
  } catch (error) {
    res.send(error);
  }
};

module.exports = register;

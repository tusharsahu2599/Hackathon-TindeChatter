const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const User = require("../models/user.model");
const express = require("express");
const Router = express.Router();
require("dotenv").config();

const webtoken = (User) => {
  return jwt.sign({ User }, process.env.jwt_web_token);
};

Router.post("/register", async (req, res) => {
  try {
    var users = await User
      .find({ email: req.body.email })
      .lean()
      .exec();
    if (users === req.body.email) 
    {
      res.send({ message: "your mail ID is already in use" });
    } 
    else {
      users = await User.create(req.body);
    }
    let token = webtoken(User);
    res.status(200).send({
        message: "User successfully registered",
        token: token,
        user: users
    });

    } catch (error) {
    res.status(500).send(error);
    }
    console.log(users)
});

Router.get("/register", async (req, res) =>
{
    try
    {
        var users = await User.find().lean().exec();
        res.send(users);
    }
    catch(error)
    {
        res.status(500).send(error);
    }
});


module.exports = Router;    


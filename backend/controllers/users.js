const User = require("../models/Users");
const passwordEncryption = require("bcrypt");
const jsonWebToken = require("jsonwebtoken");

exports.createNewUser = (req, res, next) => {
  passwordEncryption.hash(req.body.password, 10).then((hash) => {
    const userData = new User({
      userFirstName: req.body.userFirstName,
      userLastName: req.body.userLastName,
      userAge: req.body.userAge,
      userCity: req.body.userCity,
      userAddress: req.body.userAddress,
      userPhone: req.body.userPhone,
      email: req.body.email,
      password: hash,
    });
    userData
      .save()
      .then((result) => {
        res.status(201).json({
          message: "User Data Created",
          result: result,
        });
      })
      .catch((errorAtCreatedUserData) => {
        res.status(500).json({
          error: errorAtCreatedUserData,
        });
      });
  });
};

exports.loginUser = (req, res, next) => {
  let getUserOnlyInFunction;
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "User not found",
        });
      }
      getUserOnlyInFunction = user;
      return passwordEncryption.compare(req.body.password, getUserOnlyInFunction.password);
    })
    .then((result) => {
      if (!result) {
        return res.status(401).json({
          message: "User not found",
        });
      }
      const webToekn = jsonWebToken.sign(
        {
          email: getUserOnlyInFunction.email,
          userId: getUserOnlyInFunction._id,
        },
        "at_production_need_change_it!", // dont forget to chage when website is ready !!!
        {
          expiresIn: "1h",
        }
      );
      res.status(200).json({
        webToekn: webToekn,
      });
    })
    .catch((errorAtLogin) => {
      res.status(401).json({
        message: "User not found",
      });
    });
};

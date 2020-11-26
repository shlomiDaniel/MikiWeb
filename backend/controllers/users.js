const User = require("../models/Users");
const passwordEncryption = require("bcrypt");

exports.createNewUser = (req, res, next) => {
  passwordEncryption.hash(req.body.password, 10).then((hash) => {
    const userData = new User({
      userName: req.body.userName,
      userFirstName: req.body.userFirstName,
      userLastName: req.body.userLastName,
      userAge: req.body.userAge,
      userCity: req.body.userCity,
      userAddress: req.body.userAddress,
      userPhone: req.body.userPhone,
      email: req.body.email,
      password: hash,
    });
    console.log(userData);
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

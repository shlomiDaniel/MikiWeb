const User = require("../models/Users");
const passwordEncryption = require("bcrypt");

exports.createNewUser = (req, res, next) => {
    passwordEncryption.hash(req.body.password)
    const userData = new User({
        userName: req.body.userName,
        userLastName: req.body.userLastName,
        userAge: req.body.userAge,
        userCity: req.body.userCity,
        userAddress: req.body.userAddress,
        userPhone: req.body.userPhone,
        email: req.body.email,
        password: req.body.password,
    })
}

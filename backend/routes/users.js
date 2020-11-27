const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");

router.post("/registration", userController.createNewUser);

router.post("/login", userController.loginUser);

module.exports = router;

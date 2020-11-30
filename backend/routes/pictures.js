const express = require("express");
const picturesController = require("../controllers/pictures");
const router = express.Router();

router.get("/", picturesController.getAllData);

router.get(":_id", picturesController.findOnePicture);

module.exports = router;

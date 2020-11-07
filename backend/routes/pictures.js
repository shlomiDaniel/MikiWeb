const express = require("express");
const picturesController = require("../controllers/pictures");
const router = express.Router();

router.get("/", picturesController.getAllData);

router.post("/", picturesController.createNewPicture);

router.put(":/_id", picturesController.updatePictureData);

router.get(":_id", picturesController.findOnePicture);

router.delete(":_id", picturesController.deletePictureFromDB);

module.exports = router;

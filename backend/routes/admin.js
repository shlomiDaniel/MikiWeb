const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();

router.post("/addpicture", adminController.createNewPicture);

router.put(":/_id", adminController.updatePictureData);

router.delete(":_id", adminController.deletePictureFromDB);

module.exports = router;
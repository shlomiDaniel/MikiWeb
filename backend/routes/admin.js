const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();
const artStorage = require("../middleware/storageArt");


router.post("/addpicture",artStorage ,adminController.createNewPicture);

router.put(":/_id", adminController.updatePictureData);

router.delete(":_id", adminController.deletePictureFromDB);

module.exports = router;

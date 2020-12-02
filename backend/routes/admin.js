const express = require("express");
const multerPackgeForGetImage = require("multer");
const adminController = require("../controllers/admin");
const router = express.Router();



// need to ask miki what type file he want to add!
const MIM_TYPE_MAP_IMAGES = {
  "images/png": "png",
  "images/jpeg": "jpeg",
  "images/jpg": "jpg",
};

const artStorage = multerPackgeForGetImage.diskStorage({
  destination: (req, file, callBack) => {
    //security check if on of three file type no choose!
    const securityCheck = MIM_TYPE_MAP_IMAGES[file.mimetype];
    let securityError = new Error("Error file type!");
    if(securityCheck){
      securityError = null;
    } 
    callBack(securityError, "backend/images");
  },
  filename: (req, file, callBack) => {
    const artName = file.originalname.toLocaleLowerCase().split(" ").join("-");
    const typeOfFile = MIM_TYPE_MAP_IMAGES[file.mimetype];
    callBack(null, artName + '-' + Date.now() + '.' + typeOfFile);
  },
});


router.post("/addpicture", multerPackgeForGetImage(artStorage).single("photoupload"),adminController.createNewPicture);

router.put(":/_id", adminController.updatePictureData);

router.delete(":_id", adminController.deletePictureFromDB);

module.exports = router;
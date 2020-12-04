const multerPackgeForGetImage = require("multer");

// need to ask miki what type file he want to add!
const MIM_TYPE_MAP_IMAGES = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

const artStorage = multerPackgeForGetImage.diskStorage({
  destination: (req, file, callBack) => {
    //security check if on of three file type no choose!
    const securityCheck = MIM_TYPE_MAP_IMAGES[file.mimetype];
    let securityError = new Error("Error file type!");
    if (securityCheck) {
      securityError = null;
    }
    callBack(securityError, "images");
  },
  filename: (req, file, callBack) => {
    const artName = file.originalname.toLocaleLowerCase().split(" ").join("-");
    const typeOfFile = MIM_TYPE_MAP_IMAGES[file.mimetype];
    callBack(null, artName + "-" + Date.now() + "." + typeOfFile);
  },
});

module.exports = multerPackgeForGetImage({ storage: artStorage }).single(
  "imgPath"
);



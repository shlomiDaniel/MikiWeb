const Picture = require("../models/Pictures");

exports.getAllData = (req, res, next) => {
    Picture.find().then((data) => {
      res.status(200).json({
        pictures: data,
      });
    });
  };

  exports.findOnePicture = (req, res, next) => {
    Picture.findById({ _id: req.params._id }).then((data) => {
      res.json({ picture: data });
    });
  };
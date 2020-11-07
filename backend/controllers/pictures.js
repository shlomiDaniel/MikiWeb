const Picture = require("../models/Pictures");
//get all products


exports.getAllData = (req, res, next) => {
  Picture.find().then((data) => {
    res.status(200).json({
      pictures: data,
    });
  });
};

exports.createNewPicture = (req, res, next) => {
  const picture = new Picture({
    catalogNumber: req.body.catalogNumber,
    name: req.body.name,
    price: req.body.price,
    imgPath: req.body.imgPath,
    description: req.body.description,
    size: req.body.size,
    inStock: req.body.inStock,
  });
  picture.save().then((data) => {
    res.status(200).json({
      picture: data,
    });
  });
};

exports.updatePictureData = (req, res, next) => {
  Picture.findOneAndUpdate({ _id: req.params._id }, req.body).then((data) => {
    res.status(200).json({
      picture: data,
    });
  });
  res.json({ success: "updateComplete" });
};

exports.findOnePicture = (req, res, next) => {
  Picture.findById({ _id: req.params._id }).then((data) => {
    res.json({ picture: data });
  });
};

exports.deletePictureFromDB = (req, res, next) => {
  Picture.findByIdAndRemove({ _id: req.params._id }).then((data) => {
    res.json({ data: data });
  });
};
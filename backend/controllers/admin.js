const Picture = require("../models/Pictures");
//get all products


exports.createNewPicture = (req, res, next) => {
  const picture = new Picture({
    catalogNumber: req.body.catalogNumber,
    name: req.body.name,
    price: req.body.price,
    imgPath: req.body.imgPath,
    description: req.body.description,
    size_x: req.body.size_x,
    size_y: req.body.size_y,
    inStock: req.body.inStock,
  });
  console.log(picture);
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


exports.deletePictureFromDB = (req, res, next) => {
  Picture.findByIdAndRemove({ _id: req.params._id }).then((data) => {
    res.json({ data: data });
  });
};
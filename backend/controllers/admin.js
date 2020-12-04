const Picture = require("../models/Pictures");

exports.createNewPicture = (req, res, next) => {
  //url to file on server
  const serverUrl = req.protocol + '://' + req.get("host");

  const picture = new Picture({
    catalogNumber: parseInt(req.body.catalogNumber),
    name: req.body.name,
    price: parseFloat(req.body.price),
    imgPath: serverUrl + "/images/" + req.file.filename,
    description: req.body.description,
    size_x: parseFloat(req.body.size_x),
    size_y: parseFloat(req.body.size_y),
    inStock: req.body.inStock,
  });
  picture.save().then((data) => {
    res.status(201).json({
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

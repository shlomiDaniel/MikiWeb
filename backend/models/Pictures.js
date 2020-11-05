const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Picture = new Schema({
  catalogNumber: String,
  name: String,
  price: String,
  imgPath: String,
  description: String,
  size: String,
  inStock: String,
});

module.exports = mongoose.model("pictures", Picture);

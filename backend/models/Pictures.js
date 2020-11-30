const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Picture = new Schema({
  catalogNumber: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  imgPath: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  size_x: {
    type: String,
    required: true,
  },
  size_y: {
    type: String,
    required: true,
  },
  inStock: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Pictures", Picture);

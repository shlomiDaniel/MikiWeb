const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Picture = new Schema({
  catalogNumber: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
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
    type: Number,
    required: true,
  },
  size_y: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Pictures", Picture);

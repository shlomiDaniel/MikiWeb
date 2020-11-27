const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userFirstName: {
    type: String,
    required: true,
  },
  userLastName: {
    type: String,
    required: true,
  },
  userAge: {
    type: Date,
    required: true,
  },
  userCity: {
    type: String,
    required: true,
  },
  userAddress: {
    type: String,
    required: true,
  },
  userPhone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean
  }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);

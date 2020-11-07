const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = 4000;

const pictureRoute = require("./routes/pictures");

const cors = require("cors");
app.use(cors());
const keys = require("./config/keys");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
//connected to server in port 4500
app.listen(PORT, () => {
  console.log(`connected to server complete with port: ${PORT}`);
});
mongoose
  .connect(keys.mongodb.dbURI, { useNewUrlParser: true })
  .then((result) => {
    if (result) {
      console.log("connected to mongo complete");
    }
  })
  .catch((err) => {
    console.log(err);
  });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(pictureRoute);

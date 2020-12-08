const mongoose = require("mongoose");
const path = require("path");
const express = require("express");
const app = express();
const PORT = 4000;

const pictureRoute = require("./routes/pictures");
const usersRoute = require("./routes/users");
const adminRoute = require("./routes/admin");

const cors = require("cors");

const keys = require("./config/keys");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("images")));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.listen(PORT, () => {
  console.log(`connected to server complete with port: ${PORT}`);
});

//connect to mongoDb
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

//routers
app.use("/pictures", pictureRoute);
app.use("/users", usersRoute);
app.use("/admin", adminRoute);

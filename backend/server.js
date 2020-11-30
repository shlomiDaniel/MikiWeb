const mongoose = require("mongoose");
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

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  // res.setHeader("Access-Control-Allow-Credentials", "true");
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

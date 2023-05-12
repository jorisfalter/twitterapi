//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/api", function (req, res) {});

// dit niet uiteraard
app.listen(PORT, function () {
  console.log("Server started on port " + PORT);
});

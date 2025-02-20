const express = require("express");
const app = express();

// at first app.use()'s route will be executed
app.use(function (req, res, next) {
  console.log("middleware working");
  next();
});

app.use(function (req, res, next) {
  console.log("middleware2 working");
  next();
});

// getting static file from public folder
app.use(express.static("./public"));

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/profile", function (req, res) {
  res.send("profileeee");
});

app.get("/profile/:username", function (req, res) {
  res.send(`Hello from ${req.params.username}`);
});

app.listen(3000);

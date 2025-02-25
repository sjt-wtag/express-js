const express = require("express");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"], // specifying which method will be allowed

  })
);

// app.use(cors()); // allow for all

app.put("/data", (req, res) => {
  res.json({
    name: "Bangladesh",
    description: "Land of emotions",
  });
});

app.get("/data", (req, res) => {
  res.json({
    name: "Bangladesh",
    description: "Land of emotions",
  });
});

app.listen(3000);

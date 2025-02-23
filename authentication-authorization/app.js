import express from 'express';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secretKey = process.env.SECRET_KEY;
const app = express();

app.use(cookieParser());

app.get("/", function(req, res) {
  let token = jwt.sign({ email: "sumaya@gmail.com" }, secretKey);
  res.cookie("token", token); // set cookie
  res.send("done");
});

app.get("/read", function(req, res) {
  const token = req.cookies.token;
  console.log(token)
  const decodedData =jwt.verify(token, secretKey);
  console.log("decoded data ", decodedData);

  jwt.verify(token, secretKey, function(err, decoded) {
    if (err) {
      return res.status(500).send("Failed to authenticate token");
    }
    res.send(decoded);
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

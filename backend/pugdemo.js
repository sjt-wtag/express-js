const express = require("express");
const app = express();
app.set("view engine", "pug");

app.use(express.static('./public'))

// pug demo endpoint
app.get("/demo", (req, res) =>{
    res.render('demo', {title : 'Hey tamima ', message: 'Hello there from pug'});
  });

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(3000);

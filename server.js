var express = require("express");
var app = express();
const colorPalette = require('./palette');
const getPallete = require('./pallete');

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
  res.render("index", { palette: getPallete()});
});

console.log("Server runing on http://localhost:9000")
app.listen(9000);

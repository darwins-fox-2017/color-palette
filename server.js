var express = require("express");
var app = express();
let lib = require('./lib/get_pallete.js')

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
  res.render("index", { palette: lib.getPallete() });
});

console.log("Server runing on http://localhost:9000")
app.listen(9000);

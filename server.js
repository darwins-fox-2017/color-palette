var express = require("express");
var app = express();
var color = require("./lib/get_pallete")

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
  res.render("index", { pallete: color.getPallete()});
});

console.log("Server running on http://localhost:9000")
app.listen(9000);

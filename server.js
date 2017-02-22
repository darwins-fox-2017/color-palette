var express = require("express");
var app = express();

app.set('view engine', 'jade');

app.get("/", function (req, res) {
  res.render("index", { palette: ["#69D2E7", "#E0E4CC", "#F38630" });
});

console.log("Server runing on http://localhost:9000")
app.listen(9000);

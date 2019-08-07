var express = require("express");
var router = express.Router();
var ICOWatchlist = require("icowatchlist");
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "ICOs" });
});

router.get("/about", function(req, res, next) {
  res.render("about");
});

module.exports = router;

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

router.get("/team", function (req, res, next) {
  res.render("team", { title: "team" });
});
router.get("/layanan", function (req, res, next) {
  res.render("layanan", { title: "layanan" });
});
router.get("/tentang-kami", function (req, res, next) {
  res.render("tentang-kami", { title: "Tentang Kami" });
});
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "contact" });
});

module.exports = router;

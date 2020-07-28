var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  //res.render('index', { title: 'Express' });
  res.send("Hello World1!");
});
//app.get("/", (req, res) => res.send("Hello World!"));

module.exports = router;

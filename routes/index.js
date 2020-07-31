const express = require("express");
const router = express.Router();

//home page
router.get("/", (req, res, next) => {
  res.send("Hello World! Main Index page for gameportal-ubi backend project");
});

module.exports = router;

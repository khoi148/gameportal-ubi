const express = require("express");
const router = express.Router();
const Events = require("../models/events");
const { insertEvents } = require("../util/insertDocuments");

//get list of games in DB
router.get("/listevents", async (req, res, next) => {
  try {
    const list = await Events.find();
    res.status(200).send({ message: list });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "/Events/listgames not working" });
  }
});

//clear games DB, and insert 5 generic games
router.post("/insertevents", (req, res, next) => {
  insertEvents();
  res
    .status(200)
    .json({ message: "Events DB is cleared. Default events will be inserted" });
});

module.exports = router;

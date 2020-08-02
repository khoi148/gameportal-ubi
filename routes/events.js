const express = require("express");
const router = express.Router();
const Events = require("../models/events");
const { insertEvents } = require("../util/insertDocuments");

//get list of games in DB
router.get("/listevents", async (req, res, next) => {
  try {
    const list = await Events.find();
    res.status(200).send({ events: list });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "GET /Events/listgames not working" });
  }
});

//clear games DB, and insert 5 generic events
router.post("/insertevents", (req, res, next) => {
  insertEvents();
  try {
    res.status(200).json({
      message: "Events DB is cleared. Default events will be inserted",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "POST /insertevents is not working" });
  }
});

module.exports = router;

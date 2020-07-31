const express = require("express");
const router = express.Router();
const GameInfo = require("../models/gameInfo");
const Events = require("../models/events");
const { insertGames } = require("../util/insertDocuments");

//get list of games in DB
router.get("/gameinfo/listgames", async (req, res, next) => {
  try {
    const list = await GameInfo.find();
    res.status(200).json({ message: list });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "/gameinfo/listgames not working" });
  }
});

//Game info from one game, and ALL its upcoming events
router.get("/gameinfo/:gameId", async (req, res, next) => {
  const { gameId } = req.params;
  const gameDoc = await GameInfo.findOne({ _id: gameId });
  const events = await Events.find({ gameRef: gameId });
  res.status(200).json({ game: gameDoc, events: events });
});

//clear games DB, and insert 5 generic games
router.post("/insertgames", (req, res, next) => {
  insertGames();
  res
    .status(200)
    .json({ message: "Games DB is cleared. Default games will be inserted" });
});

module.exports = router;

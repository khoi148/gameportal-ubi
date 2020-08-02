const express = require("express");
const router = express.Router();
const PlayerInfo = require("../models/playerInfo");
const { insertPlayers } = require("../util/insertDocuments");

//get list of players in DB
router.get("/playerinfo/listplayers", async (req, res, next) => {
  try {
    const list = await PlayerInfo.find();
    res.status(200).json({ players: list });
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ message: "GET: /playerinfo/listplayers not working" });
  }
});

//Get player info from one game
router.get("/gameinfo/:gameId/playerinfo/:playerId", async (req, res, next) => {
  const { gameId, playerId } = req.params;
  try {
    const player = await PlayerInfo.findOne({
      gameId: gameId,
      playerId: playerId,
    });
    res.status(200).json({ player: player });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "GET: /gameinfo/:gameId/playerinfo/:playerId is not working",
    });
  }
});

//Update a player's info in one game
router.put(
  "/gameinfo/:gameId/playerinfo/:playerId/stars/:newStars/coins/:newCoins",
  async (req, res, next) => {
    const { gameId, playerId, newStars, newCoins } = req.params;
    console.log("newStars: ", newStars);
    try {
      const player = await PlayerInfo.findOne({
        gameId: gameId,
        playerId: playerId,
      });
      player.dataRecorded = { stars: newStars, coins: newCoins };
      player.save();
      res.status(200).json({ player: player });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        message:
          "PUT: /gameinfo/:gameId/playerinfo/:playerId/stars/:stars/coins/:coins is not working",
      });
    }
  }
);

//update a player's full name
router.put(
  "/gameinfo/:gameId/playerinfo/:playerId/fullname/:newName",
  async (req, res, next) => {
    const { gameId, playerId, newName } = req.params;
    try {
      const player = await PlayerInfo.findOne({
        gameId: gameId,
        playerId: playerId,
      });
      player.fullName = newName;
      player.save();
      res.status(200).json({ player: player });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        message:
          "PUT: /gameinfo/:gameId/playerinfo/:playerId/fullname/:newName is not working",
      });
    }
  }
);

//clear players DB, and insert 5 generic players
router.post("/insertplayers", (req, res, next) => {
  insertPlayers();
  try {
    res.status(200).json({
      message: "Player DB is cleared. Default players have been inserted",
    });
  } catch (err) {
    res.status(400).json({
      message: "/insertplayers is not working",
    });
  }
});

module.exports = router;

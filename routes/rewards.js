const express = require("express");
const router = express.Router();
const Events = require("../models/events");
const PlayerInfo = require("../models/playerInfo");

/* Get reward amount from event, and update player rewards*/
router.get(
  "/event/:eventId/game/:gameId/player/:playerId",
  async (req, res, next) => {
    const { eventId, gameId, playerId } = req.params;
    try {
      //TODO: Get rewards from event, from DB. Then UPDATE DB.
      const event = await Events.findById(eventId);
      let newStars = parseInt(event.rewards);
      const player = await PlayerInfo.findOne({
        gameId: gameId,
        playerId: playerId,
      });
      //Error handling. Game event must match the player profile game
      if (event.gameRef.toString() !== player.gameId.toString()) {
        throw new Error(
          "Event gameRef doesn't match the player gameId profile. Must be the same game"
        );
      }
      //note mongoose cannot sense nested object changes. So create a new object.
      player.dataRecorded = {
        coins: parseInt(player.dataRecorded.coins),
        stars: parseInt(player.dataRecorded.stars) + newStars,
      };
      player.save();
      res.status(200).json({
        message: `Reward is ${newStars} stars.`,
        player: player,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        message:
          "GET /event/:eventId/game/:gameId/player/:playerId is not working",
        err: err.message,
      });
    }
  }
);

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/game/:gameId/player/:playerId", (req, res, next) => {
  //TODO: Get the reward object out of params, to update playerInfo Rewards
  const { gameId, playerId } = req.params;
  res.status(200).json({
    message: `PlayerInfo GET Route: GameId is: ${gameId}. PlayerId is: ${playerId}`,
  });
});

router.put("/game/:gameId/player/:playerId", (req, res, next) => {
  //TODO: Get the reward object out of params, to update playerInfo rewards
  const { gameId, playerId } = req.params;
  res.status(200).json({
    message: `PlayerInfo UPDATE Route: GameId is: ${gameId}. PlayerId is: ${playerId}`,
  });
});

module.exports = router;

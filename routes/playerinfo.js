var express = require("express");
var router = express.Router();

/* GET gameinfo route. App route starts with /gameinfo */
router.get("/game/:gameId/player/:playerId", (req, res, next) => {
  //console.log(req.params.gameId);
  const { gameId, playerId } = req.params;
  res.send(`GetRoute: GameId is: ${gameId}. PlayerId is: ${playerId}`);
});

router.put("/game/:gameId/player/:playerId", (req, res, next) => {
  //TODO: Get the reward object out of params, to update playerInfo Rewards
  const { gameId, playerId } = req.params;
  res.send(`UpdateRoute: GameId is: ${gameId}. PlayerId is: ${playerId}`);
});

module.exports = router;

const express = require("express");
const router = express.Router();

/* Rewards*/
router.get(
  "/player/:playerId/game/:gameId/reward/:rewardId",
  (req, res, next) => {
    const { playerId, gameId, rewardId } = req.params;
    //TODO: Get rewards from event, from DB. Then UPDATE DB.

    res.status(200).json({
      message: `RewardRoute: Player is ${playerId}.`,
    });
  }
);

module.exports = router;

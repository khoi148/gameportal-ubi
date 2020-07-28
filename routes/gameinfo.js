var express = require("express");
var router = express.Router();

/* GET gameinfo route. App route starts with /gameinfo */
router.get("/gameinfo/:gameId", (req, res, next) => {
  //console.log(req.params.gameId);
  const { gameId } = req.params;
  res.status(200).json({ message: "GameId is: " + gameId });
});

module.exports = router;

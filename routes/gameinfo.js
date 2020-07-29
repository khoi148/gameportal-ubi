const express = require("express");
const router = express.Router();
const GameInfo = require("../models/gameInfo");

router.get("/gameinfo/listgames", async (req, res, next) => {
  try {
    // await GameInfo.create({
    //   title: "Mario",
    //   gameId: "120011",
    //   firstLoginInfo: { stars: 5, coins: 125 },
    // });
    const list = await GameInfo.find();
    res.status(200).json({ message: list });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "/gameinfi/listgames not working" });
  }
});

/* GET gameinfo route. App route starts with /gameinfo */
router.get("/gameinfo/:gameId", (req, res, next) => {
  //console.log(req.params.gameId);
  const { gameId } = req.params;
  res.status(200).json({ message: "GameId is: " + gameId });
});

module.exports = router;

const GameInfo = require("../models/gameInfo");
const Events = require("../models/events");

async function insertGames() {
  try {
    await GameInfo.deleteMany();
    for (let x = 0; x < 5; x++) {
      await GameInfo.create({
        title: "Mario" + x,
        gameId: "120011" + x,
        firstLoginInfo: { stars: 5, coins: 125 },
      });
    }
  } catch (err) {
    console.log(err);
  }
}

async function insertEvents() {
  try {
    const oneGame = await GameInfo.find();
    console.log(typeof oneGame, oneGame);

    await Events.deleteMany();
    oneGame.forEach(async (document) => {
      for (let x = 0; x < 3; x++) {
        await Events.create({
          title: "Event-" + document.title + "-" + x,
          startingTime: Date.now(),
          finishingTime: Date.now(),
          rewards: 1000 + Math.round(Math.random() * 100),
          gameRef: document._id,
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = { insertGames, insertEvents };

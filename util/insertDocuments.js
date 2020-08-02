const GameInfo = require("../models/gameInfo");
const Events = require("../models/events");
const PlayerInfo = require("../models/playerInfo");

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
    await Events.deleteMany();
    //insert 3 events per game in the DB
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

async function insertPlayers() {
  try {
    const gamesList = await GameInfo.find();
    await PlayerInfo.deleteMany();
    //insert 3 players per game
    gamesList.forEach(async (game) => {
      for (let x = 0; x < 3; x++) {
        await PlayerInfo.create({
          fullName: "Player_" + x,
          playerId: "1001-" + x,
          recentLoginTime: Date.now(),
          gameId: game.id,
          dataRecorded: {
            stars: 100,
            coins: 100,
          },
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = { insertGames, insertEvents, insertPlayers };

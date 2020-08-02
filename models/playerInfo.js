const mongoose = require("mongoose");

const playerInfoSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Player must have a full name"],
    },
    playerId: {
      type: String,
      required: [true, "Player must have an id"],
    },
    recentLoginTime: {
      type: Date,
      required: [true, "Player must have a recent login time"],
    },
    gameId: {
      type: mongoose.Types.ObjectId,
      required: [true, "Player Account must be tied to a game"],
    },
    dataRecorded: {
      type: { stars: Number, coins: Number },
      default: { stars: 0, coins: 0 },
      required: [true, "Player must have data"],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const PlayerInfo = mongoose.model("PlayerInfo", playerInfoSchema);
module.exports = PlayerInfo;

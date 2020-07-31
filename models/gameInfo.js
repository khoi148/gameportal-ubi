const mongoose = require("mongoose");

const gameInfoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Game must have a title"],
    },
    gameId: {
      type: String,
      unique: true,
      required: [true, "Game must have a unique id"],
    },
    firstLoginInfo: {
      type: { stars: Number, coins: Number },
      default: { stars: 0, coins: 0 },
      required: false,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const GameInfo = mongoose.model("GameInfo", gameInfoSchema);
module.exports = GameInfo;

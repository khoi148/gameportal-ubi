const mongoose = require("mongoose");

const eventsSchema = new mongoose.Schema(
  {
    startingTime: {
      type: Date,
      required: [true, "Event must have a start time"],
    },
    finishingTime: {
      type: Date,
      required: [true, "Event must have a ending time"],
    },
    title: {
      type: String,
      required: [true, "Event must have a title"],
    },
    rewards: {
      type: Number,
      required: [true, "Event must have a reward"],
    },
    gameRef: {
      type: mongoose.Types.ObjectId,
      ref: "GameInfo",
      required: [true, "Each event must be tied to a gameId"],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Events = mongoose.model("Events", eventsSchema);
module.exports = Events;

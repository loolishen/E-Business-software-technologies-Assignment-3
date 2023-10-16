const mongoose = require("mongoose");
const stats = mongoose.Schema({
  eventCreatedCount: {
    type: Number,
    default: 0,
  },
  categoryCreatedCount: {
    type: Number,
    default: 0,
  },
});
const statsEXP = mongoose.model("stats", stats);

module.exports = statsEXP;


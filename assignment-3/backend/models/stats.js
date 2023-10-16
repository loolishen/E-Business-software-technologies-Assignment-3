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
  recordCreatedCount: {
    type: Number,
    default: 0,
  },
  recordDeletedCount: {
    type: Number,
    default: 0,
  },
  recordUpdatedCount: {
    type: Number,
    default: 0,
  },
});
const stats = mongoose.model("stats", operationSchema);

module.exports = stats;


const stats = require("../models/stats");

module.exports = {
  getOp: async function (req, res) {
    let operations = await stats.find({});
    res.status(200).json(operations);
  },
};

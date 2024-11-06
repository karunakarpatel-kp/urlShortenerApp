const asyncHandler = require("express-async-handler");
const logger = require("node-color-log");
const urlModel = require("../models/urlModel");

const getURLAnalyticsController = asyncHandler(async (req, res, next) => {
  const shortId = req.params.shortId;
  let visited = 0;

  const findObjInDB = await urlModel.findOne({ shortId: shortId });
  console.log(findObjInDB);

  if (findObjInDB) {
    let visitedLength = findObjInDB.visitHistory.length;
    visited += visitedLength;
  } else {
    visited = 0;
  }
  logger.info({ visited });
  res.json({ visited: visited });
});

module.exports = getURLAnalyticsController;

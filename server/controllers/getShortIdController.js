const asyncHandler = require("express-async-handler");
const logger = require("node-color-log");
const urlModel = require("../models/urlModel");

const getShorIdController = asyncHandler(async (req, res, next) => {
  const shortIdParam = req.params.shortID;

  const getAndUpdateObjFrmDB = await urlModel.findOneAndUpdate(
    { shortId: shortIdParam },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
    {
      upsert: true,
    }
  );

  res.redirect(getAndUpdateObjFrmDB.redirectURL);
});

module.exports = getShorIdController;

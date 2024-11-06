const asyncHandler = require("express-async-handler");
const { v4: uuidV4 } = require("uuid");
const logger = require("node-color-log");
const urlModel = require("../models/urlModel");

const shortURLController = asyncHandler(async (req, res, next) => {
  const { url } = req.body;
  console.log(req.body);
  if (!url) {
    res.status(400);
    logger.error("URL is Required");
    throw new Error("URL is Required");
  }

  const fetchURLFromDB = await urlModel.findOne({ redirectURL: url });
  if (fetchURLFromDB) {
    res.send(fetchURLFromDB);
  } else {
    const shortId = uuidV4();
    const urlObjPostDB = await new urlModel({
      shortId: shortId,
      redirectURL: url,
      visitedHistory: [],
    });

    const saveDataToDB = await urlObjPostDB.save();

    res.send({ data: saveDataToDB, message: "Short URL Has Created Successfully" });
  }
});

module.exports = { shortURLController };

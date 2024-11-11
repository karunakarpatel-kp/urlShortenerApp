const express = require("express");
const asyncHandler = require("express-async-handler");
const urlModel = require("../models/urlModel");

const deleteURLController = asyncHandler(async (req, res, next) => {
  const shortIdFromURL = req.params.shortId;
  const findShortIdInDB = await urlModel.findOne({ shortId: shortIdFromURL });
  const deleteFromDB = await urlModel.deleteOne({ shortId: shortIdFromURL });
  res.send({
    message: "Deleted Successfully",
    deletedObj: findShortIdInDB,
    dbAcknowledgement: deleteFromDB,
  });
});

module.exports = deleteURLController;

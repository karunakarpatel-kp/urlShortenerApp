const express = require("express");
const asyncHandler = require("express-async-handler");

const urlModel = require("../models/urlModel");

const getAllURLController = asyncHandler(async (req, res, next) => {
  const getAllShortURLFromDB = await urlModel.find({});
  res.send(getAllShortURLFromDB);
});

module.exports = getAllURLController;

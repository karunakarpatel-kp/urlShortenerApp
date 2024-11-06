const express = require("express");
const getShortIdController = require("../controllers/getShortIdController");

const router = express.Router();

router.get("/:shortID", getShortIdController);

module.exports = router;

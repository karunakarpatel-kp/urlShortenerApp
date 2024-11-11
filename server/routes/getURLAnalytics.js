const express = require("express");
const getURLAnalyticsController = require("../controllers/getURLAnalyticsController");

const router = express.Router();

router.get("/api/analytics/:shortId", getURLAnalyticsController);

module.exports = router;

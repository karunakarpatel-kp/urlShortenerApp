const express = require("express");
const { shortURLController } = require("../controllers/shortURLController");

const router = express.Router();

router.post("/api/url", shortURLController);

module.exports = router;

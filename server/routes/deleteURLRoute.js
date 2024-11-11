const express = require("express");
const deleteURLController = require("../controllers/deleteURLController");

const router = express.Router();

router.get("/api/deleteURL/:shortId", deleteURLController);

module.exports = router;

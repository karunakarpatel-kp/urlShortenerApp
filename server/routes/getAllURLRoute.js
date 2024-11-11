const express = require("express");
const getAllURLController = require("../controllers/getAllURLController");

const router = express.Router();

router.get("/api/getAllURL", getAllURLController);

module.exports = router;

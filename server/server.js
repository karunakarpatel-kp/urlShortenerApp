const express = require("express");
const logger = require("node-color-log");
const cors = require("cors");
const bodyParser = require("body-parser");

const { errorHandler } = require("./middlewares/errorHandlerMiddleware");
const shortURLRouter = require("./routes/URLRoute");
const getShortIdRouter = require("./routes/getShortIDRoute");
const getURLAnalyticsRouter = require("./routes/getURLAnalytics");
const connectingToDB = require("./DBConnection/mongooseConnection");

const dotENV = require("dotenv");
// Load ENV Variables
dotENV.config();

const app = express();

const PORT = 8000;

// Middlewares Below
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connecting to DB
connectingToDB();

app.use("/", shortURLRouter);
app.use("/", getShortIdRouter);
app.use("/", getURLAnalyticsRouter);

app.listen(PORT, () => {
  let message = `Server running on PORT: ${PORT}`;
  logger.info(message);
});

app.use(errorHandler);

const express = require("express");
const logger = require("node-color-log");
const cors = require("cors");
const bodyParser = require("body-parser");

const { errorHandler } = require("./middlewares/errorHandlerMiddleware");
const shortURLRouter = require("./routes/URLRoute");
const getShortIdRouter = require("./routes/getShortIDRoute");
const getURLAnalyticsRouter = require("./routes/getURLAnalytics");
const getAllURLRouter = require("./routes/getAllURLRoute");
const deleteURLRouter = require("./routes/deleteURLRoute");
const connectingToDB = require("./DBConnection/mongooseConnection");

const dotENV = require("dotenv");
// Load ENV Variables
dotENV.config();

const app = express();

const PORT = 8000;

// Middlewares Below
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Connecting to DB
connectingToDB();

app.use("/", deleteURLRouter);
app.use("/", getAllURLRouter);
app.use("/", getURLAnalyticsRouter);
app.use("/", shortURLRouter);
app.use("/", getShortIdRouter);

app.listen(PORT, () => {
  let message = `Server running on PORT: ${PORT}`;
  logger.info(message);
});

app.use(errorHandler);

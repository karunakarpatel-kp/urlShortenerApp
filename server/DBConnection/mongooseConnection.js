const logger = require("node-color-log");
const mongoose = require("mongoose");

const connectionToDB = async (req, res, next) => {
  try {
    const mongooseConnection = await mongoose.connect(process.env.MONGO_DB_URL);
    const msgObj = {
      message: "Successfully Connected to DB",
      host: mongooseConnection.connection.host,
      name: mongooseConnection.connection.name,
    };
    logger.info(msgObj);
  } catch (err) {
    logger.error("Error Connecting To Database:" + err);
  }
};

module.exports = connectionToDB;

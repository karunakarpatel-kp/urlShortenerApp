const logger = require("node-color-log");

const errorHandler = (err, req, res, next) => {
  const errStat = res.statusCode || 500;
  const errMsg = err.message || "Something went wrong";

  res.status(errStat).send({
    success: false,
    status: errStat,
    message: errMsg,
    stack: err.stack,
  });
  next();
};

module.exports = { errorHandler };

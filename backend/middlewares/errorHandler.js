import HTTP_STATUS from "../constants/httpStatus.js";
import logger from "../config/logger.js";

const errorHandler = (err, req, res, next) => {
  const statusCode =
    err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;

  logger.error({
    message: err.message,
    statusCode,
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
    stack: err.stack,
  });

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message: err.message || "Internal Server Error",
    errors: err.errors || [],
  });
};

export default errorHandler;
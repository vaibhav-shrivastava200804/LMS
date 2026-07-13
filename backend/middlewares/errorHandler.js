import logger from '../config/logger.js';
import ApiResponse from '../utils/ApiResponse.js';

const errorHandler = (err, req, res, next) => {
  logger.error(err);
  const status = err.statusCode || 500;
  return ApiResponse.error(
    res,
    err.message || 'Internal Server Error',
    process.env.NODE_ENV === 'development' ? err.stack : null,
    status,
  );
};

export default errorHandler;
import ApiResponse from '../utils/ApiResponse.js';

const notFound = (req, res) => {
  return ApiResponse.error(
    res,
    `Cannot ${req.method} ${req.originalUrl}`,
    null,
    404,
  );
};

export default notFound;
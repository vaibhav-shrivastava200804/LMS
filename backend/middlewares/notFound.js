import HTTP_STATUS from "../constants/httpStatus.js";

const notFound = (req, res) => {
  return res.status(HTTP_STATUS.NOT_FOUND).json({
    success: false,
    statusCode: HTTP_STATUS.NOT_FOUND,
    message: `Cannot ${req.method} ${req.originalUrl}`,
    errors: [],
  });
};

export default notFound;


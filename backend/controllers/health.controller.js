import asyncHandler from "../middlewares/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import HTTP_STATUS from "../constants/httpStatus.js";
import healthService from "../services/health.service.js";

const health = asyncHandler(async (req, res) => {
  const data = await healthService.getHealthStatus();

  return res
    .status(HTTP_STATUS.OK)
    .json(
      ApiResponse.success(
        data,
        "Application is healthy",
        HTTP_STATUS.OK
      )
    );
});

export default {
  health,
};
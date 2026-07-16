import authService from "../services/auth.service.js";

import asyncHandler from "../middlewares/asyncHandler.js";

import ApiResponse from "../utils/ApiResponse.js";

import HTTP_STATUS from "../constants/httpStatus.js";

class AuthController {
  register = asyncHandler(async (req, res) => {
    const user = await authService.register(req.body);

    return res.status(HTTP_STATUS.CREATED).json(
      ApiResponse.created(
        user,
        "Registration completed successfully."
      )
    );
  });
}

export default new AuthController();
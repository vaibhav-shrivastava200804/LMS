import { Router } from 'express';
import healthRouter from './health.route.js';
import homePageRouter from "./homePage.route.js";
import errorHandler from '../middlewares/errorHandler.js';
import ApiError from '../utils/ApiError.js';
import HTTP_STATUS from '../constants/httpStatus.js';
import asyncHandler from '../middlewares/asyncHandler.js';

const router = Router();
router.use('/api/health', healthRouter);
router.use("",homePageRouter)
router.get("/error", (req, res) => {
    throw new ApiError(
        HTTP_STATUS.BAD_REQUEST,
        "This is a test error"
    );
});

router.get( "/test", asyncHandler(async (req, res) => {
        throw new ApiError(
            400,
            "Testing async handler"
        );

    })
);
export default router;
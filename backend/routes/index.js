import { Router } from 'express';
import healthRouter from './health.route.js';
import homePageRouter from "./homePage.route.js";
import errorHandler from '../middlewares/errorHandler.js';
import ApiError from '../utils/ApiError.js';
import HTTP_STATUS from '../constants/httpStatus.js';
import asyncHandler from '../middlewares/asyncHandler.js';
import authRouter from "./auth.route.js";

const router = Router();
router.use('/health', healthRouter);
router.use("",homePageRouter)

/**
 * @swagger
 * /error:
 *   get:
 *     summary: Trigger a test synchronous error
 *     tags:
 *       - Debug
 *     responses:
 *       400:
 *         description: Test error returned by the global error handler
 */
router.get("/error", (req, res) => {
    throw new ApiError(
        HTTP_STATUS.BAD_REQUEST,
        "This is a test error"
    );
});

/**
 * @swagger
 * /test:
 *   get:
 *     summary: Trigger a test async error
 *     tags:
 *       - Debug
 *     responses:
 *       400:
 *         description: Test async error returned by the global error handler
 */
router.get( "/test", asyncHandler(async (req, res) => {
        throw new ApiError(
            400,
            "Testing async handler"
        );

    })
);

router.use("/auth",authRouter);
export default router;

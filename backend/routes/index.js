import { Router } from 'express';
import healthRouter from './health.route.js';
import homePageRouter from "./homePage.route.js";

const router = Router();
router.use('/api/health', healthRouter);
router.use("",homePageRouter)
export default router;
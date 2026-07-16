import { Router } from 'express';
import healthController from '../controllers/health.controller.js';
const router = Router();

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Check API health
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Server health status returned successfully
 */
router.get("/",healthController.health);

export default router;

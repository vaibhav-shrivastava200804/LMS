import { Router } from 'express';
const router = Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Load API home page
 *     tags:
 *       - Home
 *     responses:
 *       200:
 *         description: Home page loaded successfully
 */
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Home Page is Loaded',
    data: {
      uptime: process.uptime(),
      timestamp: new Date().toISOString().split('T')[0],
      environment: process.env.NODE_ENV,
    },
  });
});

export default router;

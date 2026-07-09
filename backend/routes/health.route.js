import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is healthy',
    data: {
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
    },
  });
});

export default router;
import http from "http";

import app from "./app.js";
import env from "./config/env.js";
import connectDB from "./config/connectDB.js";
import logger from "./config/logger.js";

const start = async () => {
  try {
    await connectDB();

    const server = http.createServer(app);

    server.listen(env.port, () => {
      logger.info(`Server started successfully.`);
      logger.info(`Environment : ${env.nodeEnv}`);
      logger.info(`Port        : ${env.port}`);
      logger.info(`API Base    : http://localhost:${env.port}/api/v1`);
    });

    process.on("SIGINT", () => {
      logger.info("Gracefully shutting down...");
      server.close(() => process.exit(0));
    });

    process.on("SIGTERM", () => {
      logger.info("Gracefully shutting down...");
      server.close(() => process.exit(0));
    });
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
};

start();
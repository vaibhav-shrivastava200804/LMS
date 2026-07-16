import os from "os";
import pool from "../config/database.js";

const getHealthStatus = async () => {
  let database = "DISCONNECTED";

  try {
    await pool.query("SELECT 1");
    database = "CONNECTED";
  } catch {
    database = "DISCONNECTED";
  }

  return {
    status: "UP",
    environment: process.env.NODE_ENV,
    uptime: Number(process.uptime().toFixed(2)),
    timestamp: new Date().toISOString(),
    database,
    nodeVersion: process.version,
    platform: process.platform,
    hostname: os.hostname(),
    memory: {
      rss: process.memoryUsage().rss,
      heapUsed: process.memoryUsage().heapUsed,
      heapTotal: process.memoryUsage().heapTotal,
    },
  };
};

export default {
  getHealthStatus,
};
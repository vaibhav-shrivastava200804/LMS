import dotenv from "dotenv";

dotenv.config();

const appConfig = {
  appName: process.env.APP_NAME || "LMS Backend",
  env: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT) || 5000,
  apiPrefix: process.env.API_PREFIX || "/api/v1",
  baseUrl: process.env.BASE_URL || "http://localhost:5000",
};

export default appConfig;
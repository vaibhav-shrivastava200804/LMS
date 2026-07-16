import env from "../config/env.js";

const refreshCookieOptions = {
  httpOnly: true,
  secure: env.nodeEnv === "production",
  sameSite: "strict",
  path: "/api/v1/auth/refresh",
};

export default {
  refreshCookieOptions,
};
import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";

import routes from "./routes/index.js";
import corsOptions from "./config/cors.js";

import requestLogger from "./middlewares/requestLogger.js";
import rateLimiter from "./middlewares/rateLimiter.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFound from "./middlewares/notFound.js";
import swaggerSetup from "./swagger/swagger.js";

const app = express();

app.set("trust proxy", 1);

app.use(helmet());
app.use(cors(corsOptions));
app.use(compression());

app.use(
  express.json({
    limit: "10mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "10mb",
  })
);

app.use(cookieParser());
app.use(requestLogger);
app.use(rateLimiter);

swaggerSetup(app);

// API base
app.use("/api/v1", routes);

app.use(notFound);
app.use(errorHandler);

export default app;


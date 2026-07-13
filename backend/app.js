import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import { Router } from 'express';
import routes from "./routes/index.js";
import corsOptions from "./config/cors.js";
import requestLogger from "./middlewares/requestLogger.js";
import rateLimiter from './middlewares/rateLimiter.js';
import errorHandler from "./middlewares/errorHandler.js";
import notFound from "./middlewares/notFound.js";

const app = express();
const router = Router();

app.use(helmet());
app.use(cors(corsOptions));
app.use(compression());
app.use(requestLogger);
app.use(express.json());
app.use(cookieParser());
app.use(rateLimiter);
app.use("/", routes);
app.use(notFound);
app.use(errorHandler);

export default app;

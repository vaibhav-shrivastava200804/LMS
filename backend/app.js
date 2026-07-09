import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import { Router } from 'express';
import routes from "./routes/index.js";

const app = express();
const router = Router();

app.use(helmet());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

app.use(compression());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/", routes);


export default app;

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";
import { fileURLToPath } from "url";

import swaggerDefinition from "./swaggerDef.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const backendDir = path.resolve(__dirname, "..");

const options = {
  definition: swaggerDefinition,
  // Use absolute globs so route docs are found no matter where the server starts.
  apis: [
    path.join(backendDir, "routes/**/*.js"),
    path.join(backendDir, "controllers/**/*.js"),
  ],
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerSetup = (app) => {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
      explorer: true,
      customSiteTitle: "LMS API Documentation",
    })
  );
};

export default swaggerSetup;

import appConfig from "../config/app.config.js";

const apiServerUrl = `${appConfig.baseUrl}${appConfig.apiPrefix}`;

const swaggerDefinition = {
  openapi: "3.0.3",
  info: {
    title: "LMS Backend API",
    version: "1.0.0",
    description: "Enterprise Learning Management System REST API",
  },

  servers: [
    {
      url: apiServerUrl,
      description:
        appConfig.env === "production"
          ? "Production Server"
          : "Development Server",
    },
  ],

  components: {
    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },

  security: [
    {
      BearerAuth: [],
    },
  ],
};

export default swaggerDefinition;

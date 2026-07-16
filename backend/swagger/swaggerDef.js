const swaggerDefinition = {
  openapi: "3.0.3",
  info: {
    title: "LMS Backend API",
    version: "1.0.0",
    description: "Enterprise Learning Management System REST API",
  },

  servers: [
    {
      url: `http://localhost:${process.env.PORT || 5000}/api/v1`,
      description: "Development Server",
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
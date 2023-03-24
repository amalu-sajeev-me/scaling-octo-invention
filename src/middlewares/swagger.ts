import swaggerJsdoc, { Options } from "swagger-jsdoc";

const options: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Basic Api Documentation",
      version: "1.0.0",
    },
    swagger: "lolo",
  },
  apis: ["./src/routers/user.router.ts"], // files containing annotations as above
};

export const openapiSpecification = swaggerJsdoc(options);

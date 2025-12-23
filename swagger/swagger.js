const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0", // OpenAPI versiyasi
        info: {
            title: "API Documentation", // API nomi
            version: "1.0.0", // Versiya
            description: "API uchun Swagger hujjati", // Tavsif
        },
        servers: [
            {
                url: "http://localhost:7777", // Server manzili
            },
        ],
    },
    apis: ["./routes/*.js"], 
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const setupSwagger = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

module.exports = setupSwagger;  
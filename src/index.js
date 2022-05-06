require("dotenv").config();

const porta = 3333;
const mongoConnection = require("./config/db");
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../doc/swagger_output.json");
const app = express();
const controllerCadastro = require("./controller/cadastro.controller");

mongoConnection();
app.use(express.json());
app.use("/cristolandia/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use("/cristolandia", controllerCadastro);

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`);
});

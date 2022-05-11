require("dotenv").config();

const porta = 3333;
const mongoConnection = require("./config/db");
const cors = require("cors");
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../doc/swagger_output.json");
const app = express();
const controllerCadastro = require("./controller/cadastro.controller");
const controllerLogin = require("./controller/login.controller");

// const keycloack = require("./config/keycloak-config.js").initKeycloak();
// app.use(keycloack.middleware())

mongoConnection();
app.use(cors());
app.use(express.json());
app.use("/ong/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use("/ong", controllerCadastro);
app.use("/ong", controllerLogin);

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`);
});

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
const controllerMedico = require("./controller/medico.controller");


mongoConnection();
app.use(cors());
app.use(express.json());
app.use("/ong/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use("/ong", controllerCadastro);
app.use("/ong", controllerLogin);
app.use("/ong", controllerMedico);
app.listen(porta, () => {
    console.log(`Aplicação funcionado corretamente na porta: ${porta}.\nDocumentação executando em http://localhost:${porta}/ong/doc/`);
});

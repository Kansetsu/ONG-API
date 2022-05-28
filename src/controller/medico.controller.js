const express = require("express");
const controller = express.Router();
const medicoService = require("../services/medico.service");

// ---IMPORTANTE---
//Os comentários abaixo estão gerando as informações para o swagger_output.json quando ele é criado.

controller.post("/cadastrarDadosMedicos", (req, res) => {
    // #swagger.tags = ['Medico']
    // #swagger.summary = 'Cadastra os dados médicos do acolhido.'
    // #swagger.description = 'Cadastra os dados médicos do acolhido.'
    /* #swagger.parameters['dados do acolhido'] = {
        in: 'body',
        description: 'Informações do acolhido.',
        required: true,
        schema: { $ref: "#/definitions/DadosMedicos"}
    }*/
    res.send(medicoService.create(req.body).catch((error) => {
        console.log(`Ocorreu um erro: ${error}`);
    }));
});

controller.get("/getTodosDadosMedicos", async (req, res) => {
    // #swagger.tags = ['Medico']
    // #swagger.summary = 'Retorna os dados médicos de todos os acolhidos.'
    // #swagger.description = 'Retorna os dados médicos de todos os acolhidos.'
    res.send(await medicoService.getTodosDadosMedicos().catch((error) => {
        console.log(`Ocorreu um erro: ${error}`);
    }));
});

controller.get("/getUmDadoMedico", async (req, res) => {
    // #swagger.tags = ['Medico']
    // #swagger.summary = 'Retorna os dados médicos de um acolhido, utilizando o nome e a data de nascimento para localiza-lo.'
    // #swagger.description = 'Retorna os dados médicos de um acolhido, utilizando o nome e a data de nascimento para localiza-lo.'
    // #swagger.parameters['nome'] = { description: 'Nome do acolhido.', required: true }
    // #swagger.parameters['dataNascimento'] = { description: 'Data de nascimento do acolhido.', required: true}
    res.send(await medicoService.getUmDadoMedico(req.query).catch((error) => {
        console.log(`Ocorreu um erro: ${error}`);
    }));
});

controller.delete("/deletarDadosMedicos", async (req, res) => {
    // #swagger.tags = ['Medico']
    // #swagger.summary = 'Remove os dados médicos de um acolhido.'
    // #swagger.description = 'Remove os dados médicos de um acolhido, localizando ele pelo nome e data de nascimento. '
    // #swagger.parameters['nome'] = { description: 'Nome do acolhido.', required: true}
    // #swagger.parameters['dataNascimento'] = { description: 'Data de nascimento do acolhido.', required: true}
    res.send(await medicoService.deleteDadoMedico(req.query).catch((error) => {
        console.log(`Ocorreu um erro: ${error}`);
    }));
});

controller.put("/atualizarDadosMedicos/", async (req, res) => {
    // #swagger.tags = ['Medico']
    // #swagger.summary = 'Atualiza informações dos dados médicos de um acolhido.'
    // #swagger.description = 'Atualiza as informações dos dados médicos de de um acolhido, localizando-o através de seu nome e data de nascimento, repassando os dados necessários. '
    // #swagger.parameters['nome'] = { description: 'Nome do acolhido.', required: true}
    // #swagger.parameters['dataNascimento'] = { description: 'Data de nascimento do acolhido.', required: true}
    /* #swagger.parameters['dados atualizados'] = {
        in: 'body',
        description: 'Dados médicos do acolhido atualizados.',
        required: true,
        schema: { $ref: "#/definitions/DadosMedicos"}
    }*/
    res.send(await medicoService.updateDadoMedico(req.query, req.body).catch((error) => {
        console.log(`Ocorreu um erro: ${error}`);
    }));
});

module.exports = controller;

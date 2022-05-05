const express = require("express");
const controller = express.Router();
const service = require("../services/cadastro.service");


// ---IMPORTANT---
//Os comentários abaixo estão gerando as informações para o swagger_output.json quando ele é criado.


controller.post("/cadastarAcolhido", (req, res) => {
    // #swagger.tags = ['Acolhidos']
    // #swagger.summary = 'Cadastra um novo acolhido no banco de dados.'
    // #swagger.description = 'Essa rota é responsável por cadastrar um novo acolhido.'
    /* #swagger.parameters['dados do acolhido'] = {
        in: 'body',
        description: 'Informações do acolhido.',
        required: true,
        schema: { $ref: "#/definitions/CadastroDoAcolhido"}
    }*/
    res.send(service.create(req.body));
});

controller.get("/todosOsAcolhidos", async (req, res) => {
    // #swagger.tags = ['Acolhidos']    
    // #swagger.summary = 'Retorna todos os acolhidos cadastrados'
    // #swagger.description = 'Retorna todos os acolhidos cadastrados'
    res.send(await service.getTodosAcolhidos());
});

controller.get("/acolhidoPorMatricula", async (req, res) => {
    // #swagger.tags = ['Acolhidos']
    // #swagger.summary = 'Retorna um acolhido utilizando sua matrícula.'
    // #swagger.description = 'Retorna o acolhido que estiver a matrícula cadastrada no banco.'
    // #swagger.parameters['matricula'] = { description: 'Matrícula do acolhido.' } 
    res.send(await service.getAcolhidoPorMatricula(req.query));
});

controller.get("/acolhidosPorUnidade", async (req, res) => {
    // #swagger.tags = ['Acolhidos']
    // #swagger.summary = 'Retorna um acolhido utilizando a unidade que está alocado.'
    // #swagger.description = 'Retorna o acolhido que estiver na unidade informada.'
    // #swagger.parameters['unidade'] = { description: 'Unidade que o acolhido está alocado.' } 
    res.send(await service.getAcolhidosPorUnidade(req.query));
});

controller.delete("/deletarAcolhido", async (req, res) => {
    // #swagger.tags = ['Acolhidos']
    // #swagger.summary = 'Remove um acolhido do banco de dados.'
    // #swagger.description = 'Remove um acolhido do banco de dados localizando-o através de sua matrícula.'
    // #swagger.parameters['matricula'] = { description: 'Matrícula do acolhido.'}    
    res.send(await service.deleteAcolhido(req.query));
});

controller.put("/atualizarAcolhido/:matricula", async (req, res) => {
    // #swagger.tags = ['Acolhidos']
    // #swagger.summary = 'Atualiza informações de um acolhido.'
    // #swagger.description = 'Atualiza as informações do acolhido, localizando-o através de sua matrícula, repassando os dados necessários. '
    // #swagger.parameters['matricula'] = { description: 'Matrícula do acolhido.' }
    /* #swagger.parameters['dados atualizados'] = {
        in: 'body',
        description: 'Book information for update',
        required: true,
        schema: { $ref: "#/definitions/CadastroDoAcolhido"}
    }*/    
    res.send(await service.updateAcolhido(req.params, req.query));
});

module.exports = controller
const swaggerAutogen = require('swagger-autogen')()

const outputFile = './doc/swagger_output.json'
const controllerFile = ['./src/controller/cadastro.controller.js', './src/controller/login.controller.js']

// Responsável por gerar as informações para o arquivo swagger_output.json
const doc = {
    info: {
        version: "1.0.0",
        title: "Cristolândia API",
        description: "API desenvolvida para prover dados ao front-end do sistema de cadastros da Cristolandia",
        contact: {
            email: "vinicius802010@gmail.com"
        }
    },
    host: "localhost:3333",
    basePath: "/cristolandia",
    schemes: ["http"],
    consumes: ['application/json'],
    produces: ['application/json'],
    definitions: {
        CadastroDoAcolhido: {
            nomeCompleto: "Quentin Tarantino",
            nomeDaMae: "Patrícia Amorim",
            nomeDoPai: "João Planaltina",
            naturalidade: "Brasileiro",
            nacionalidade: "Brasileiro",
            idade: 59,
            dataDeNascimento: "05-05-2022",
            estadoCivil: "Solteiro",
            raca: "Branco",
            escolaridade: "Superior Completo",
            profissao: "Diretor de Cinema",
            CPF: "123.456.789-10",
            sexo: "Masculino",
            RG: "12.345.678",
            estadoEmissor: "PE",
            dataDeEmissaoRG: "05-05-2022",
            orgaoEmissor: "SDS",
            CEP: "52091-240",
            endereco: "Rua Córrego do boleiro, 221",
            estado: "PE",
            municipio: "Recife",
            bairro: "Nova Descoberta",
            unidadeDeOrigem: "Recife Centro",
            numeroDeInternacoes: 0,
            contatoDeEmergencia1: "81 98726-7365",
            contatoDeEmergencia2: "81 98342-6557",
            dataDeSaida: "06-05-2022",
            matricula: "02307485"
        },
        CadastroDaCredencial: {
            nome: "Valentina",
            sobrenome: "Silva",
            login: "01304487",
            senha: "123456",
            admin: true
        }
    }
}


//Gera um novo swagger_output.json quando você inicia o projeto, iniciando o index.js (npm run swagger-autogen)
swaggerAutogen(outputFile, controllerFile, doc).then(() => {
    require("../index.js");
});
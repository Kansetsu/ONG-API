const mongoose = require("mongoose");
const { cadastroSchema } = require("../schema/cadastro.schema");
const cadastroService = require("./cadastro.service");

let connection;
let db;
beforeAll(async () => {
    connection = await mongoose.connect(globalThis.__MONGO_URI__, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe("localizar acolhido por matricula", () => {
    it("deveria localizar um acolhido pela sua matricula", async () => {
        const mockAcolhidos = {
            nomeCompleto: "Quentin Tarantino ",
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
            matricula: "02307485",
        };

        await cadastroService.create(mockAcolhidos);
        let teste = await cadastroService.getAcolhidoPorMatricula({ matricula: "02307485" });
        const { _id, __v, ...resto } = teste;
        expect(resto).toEqual(mockAcolhidos);
    });
});

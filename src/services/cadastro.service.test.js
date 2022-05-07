const { MongoClient } = require("mongodb");
const cadastroService = require("./cadastro.service");

describe("localizar acolhido por matricula", () => {
    let connection;
    let db;

    beforeAll(async () => {
        connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        db = await connection.db(globalThis.__MONGO_DB_NAME__);
    });

    afterAll(async () => {
        await connection.close();
    });

    it("deveria localizar um acolhido pela sua matricula", async () => {
        const acolhidos = db.collection("acolhidos");
        const mockAcolhidos = {
            _id: "1",
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

        await acolhidos.insertOne(mockAcolhidos);
        const acolhidoEncontrado = await acolhidos.findOne({ matricula: "02307485" });
        console.log(acolhidoEncontrado);
        expect(acolhidoEncontrado).toEqual(mockAcolhidos);
    });
});

describe("localizar acolhidos por unidade alocada", () => {
    let connection;
    let db;

    beforeAll(async () => {
        connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        db = await connection.db(globalThis.__MONGO_DB_NAME__);
    });

    afterAll(async () => {
        await connection.close();
    });

    it("deveria localizar s acolhidos pela sua unidade de origem", async () => {
        const acolhidos = db.collection("acolhidos");
        const mockAcolhidos = {
            _id: "2",
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

        await acolhidos.insertOne(mockAcolhidos);
        const acolhidosEncontrados = await acolhidos.find({ unidadeDeOrigem: "Recife Centro" });
        // expect(acolhidosEncontrados).toEqual(mockAcolhidos);

        // TO-DO
    });
});

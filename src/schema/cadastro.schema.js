const mongoose = require("mongoose");

const cadastroSchema = new mongoose.Schema({
    nomeCompleto: { type: String },
    nomeCompleto: { type: String },
    nomeDaMae: { type: String },
    nomeDoPai: { type: String },
    naturalidade: { type: String },
    nacionalidade: { type: String },
    idade: { type: Number },
    dataDeNascimento: { type: String },
    estadoCivil: { type: String },
    raca: { type: String },
    escolaridade: { type: String },
    profissao: { type: String },
    CPF: { type: String },
    sexo: { type: String },
    RG: { type: String },
    estadoEmissor: { type: String },
    dataDeEmissaoRG: { type: String },
    orgaoEmissor: { type: String },
    CEP: { type: String },
    endereco: { type: String },
    estado: { type: String },
    municipio: { type: String },
    bairro: { type: String },
    unidadeDeOrigem: { type: String },
    numeroDeInternacoes: { type: Number },
    contatoDeEmergencia1: { type: String },
    contatoDeEmergencia2: { type: String },
    dataDeSaida: { type: String },
    matricula: { type: String },
});



module.export = {cadastroSchema} ;

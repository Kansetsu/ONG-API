const mongoose = require("mongoose");

const medicoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    dataNascimento: { type: String, required: true },
    dataChegada: { type: String, required: true },
    dataAtendimento: { type: String, required: true },
    aspectosCognitivos: { type: String, required: true },
    opniaoSituacao: { type: String, required: true },
    consideraDependenteQuimico: { type: String, required: true },
    composicaoFamiliar: { type: String, required: true },
    relacoesParentais: { type: String, required: true },
    relacionamentoComFamilia: { type: String, required: true },
    reestabelecimentoFamiliar: { type: String, required: true },
    comoComecouNasDrogas: { type: String, required: true },
    informacoesAdicionais: { type: String, required: true },
    orientacoesPassadas: { type: Boolean, required: true },
    contatosDeEmergencia: {
        numero1: { type: String, required: true },
        numero2: { type: String },
    },
    evolucaoDoVinculo: { type: String, required: true },
    reitegracaoFamiliar: { type: String, required: true },
    antecedentesDependenciaQuimica: { type: Boolean, required: true },
    necessitaApoioJuridico: {
        necessita: { type: Boolean, required: true },
        especifique: { type: String },
    },
    rendaPropria: {
        possui: { type: Boolean, required: true },
        queTipo: { type: String },
    },
    expProfissional: { type: String, required: true },
    propostaDeRenda: { type: String, required: true },
    propostaDeMoradia: { type: String, required: true },
    objetivosDoAcolhido: { type: String, required: true },
    tipoDeSaida: { type: String, required: true },
});

const medicoModel = mongoose.model("medico", medicoSchema);

module.exports = medicoModel;

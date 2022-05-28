const mongoose = require("mongoose");

const medicoSchema = new mongoose.Schema({
    nome: String,
    dataNascimento: String,
    dataChegada: String,
    dataAtendimento: String,
    aspectosCognitivos: String,
    opniaoSituacao: String,
    consideraDependenteQuimico: String,
    composicaoFamiliar: String,
    relacoesParentais: String,
    relacionamentoComFamilia: String,
    reestabelecimentoFamiliar: String,
    comoComecouNasDrogas: String,
    informacoesAdicionais: String,
    orientacoesPassadas: Boolean,
    contatosDeEmergencia: {
        numero1: { type: String },
        numero2: { type: String },
    },
    evolucaoDoVinculo: String,
    reitegracaoFamiliar: String,
    antecedentesDependenciaQuimica: Boolean,
    necessitaApoioJuridico: {
        necessita: { type: Boolean },
        especifique: { type: String },
    },
    rendaPropria: {
        possui: { type: Boolean },
        queTipo: { type: String },
    },
    expProfissional: String,
    propostaDeRenda: String,
    propostaDeMoradia: String,
    objetivosDoAcolhido: String,
    tipoDeSaida: String,
});

const medicoModel = mongoose.model("medico", medicoSchema);

module.exports = medicoModel;

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
    contatosDeEmergencia: mongoose.Schema.Types.Mixed,
    evolucaoDoVinculo: String,
    reitegracaoFamiliar: String,
    antecedentesDependenciaQuimica: Boolean,
    necessitaApoioJuridico: mongoose.Schema.Types.Mixed,
    rendaPropria: mongoose.Schema.Types.Mixed,
    expProfissional: String,
    propostaDeRenda: String,
    propostaDeMoradia: String,
    objetivosDoAcolhido: String,
    tipoDeSaida: String,
});

const medicoModel = mongoose.model("medico", medicoSchema);

module.exports =  medicoModel;

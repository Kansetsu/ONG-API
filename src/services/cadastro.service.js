const mongoose = require("mongoose");
const cadastroSchema = require("../schema/cadastro.schema");
const cadastroModel = mongoose.model("Acolhido", cadastroSchema);

module.exports = {
    create: (dataInsert) => {
        return cadastroModel.create({ ...dataInsert });
    },

    getTodosAcolhidos: () => {
        return cadastroModel.find();
    },

    getAcolhidoPorMatricula: (matricula) => {
        return cadastroModel.findOne({ matricula });
    },

    getAcolhidosPorUnidade: (unidadeDeOrigem) => {
        return cadastroModel.find({ unidadeDeOrigem });
    },

    deleteAcolhido: (matricula) => {
        return cadastroModel.deleteOne({ matricula });
    },

    updateAcolhido: (matricula, update) => {
        return cadastroModel.findOneAndUpdate({ matricula }, update, { new: true });
    },
};

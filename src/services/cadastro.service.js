const { cadastroModel } = require("../schema/cadastro.schema");

const cadastroService = {
    create: (dataInsert) => {
        return cadastroModel.create(dataInsert);
    },

    getTodosAcolhidos: () => {
        return cadastroModel.find();
    },

    getAcolhidoPorMatricula: (matricula) => {
        return cadastroModel.findOne(matricula).lean();
    },

    getAcolhidosPorUnidade: (unidadeDeOrigem) => {
        return cadastroModel.find(unidadeDeOrigem).lean();
    },

    deleteAcolhido: (matricula) => {
        return cadastroModel.deleteOne(matricula);
    },

    updateAcolhido: (matricula, update) => {
        console.log(matricula);
        console.log({ ...update });
        return cadastroModel.findOneAndUpdate(matricula, update, { new: true });
    },
};

module.exports = cadastroService;

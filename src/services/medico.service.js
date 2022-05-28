const  medicoModel  = require("../schema/medico.schema");
const medicoService = {
    create: (dataInsert) => {
        return medicoModel.create(dataInsert);
    },

    getTodosDadosMedicos: () => {
        return medicoModel.find();
    },

    getUmDadoMedico: ({nome, dataNascimento}) => {
        return medicoModel.findOne({nome, dataNascimento}).lean();
    },

    deleteDadoMedico: ({nome, dataNascimento}) => {
        return medicoModel.deleteOne({nome, dataNascimento});
    },

    updateDadoMedico: ({nome, dataNascimento}, update) => {
        return medicoModel.findOneAndUpdate({nome, dataNascimento}, update, { new: true });
    },
};

module.exports = medicoService;

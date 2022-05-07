const loginModel = require("../schema/login.schema.js");

const loginService = {
    cadastrar: (dadosLogin) => {
        return loginModel.create(dadosLogin);
    },

    getCadastro: (login) => {
        return loginModel.findOne(login);
    },

    getAllCadastros: () => {
        return loginModel.find();
    },

    deletarCadastro: (login) => {
        return loginModel.deleteOne(login);
    },

    atualizarSenha: (login, novaSenha) => {
        return loginModel.findOneAndUpdate(login, novaSenha, { new: true });
    }
};

module.exports = loginService;

const loginModel = require("../schema/login.schema.js");
const crypto = require("crypto");

const loginService = {
    cadastrar: (dadosLogin) => {
        const nice = crypto.randomBytes(16).toString("hex");
        const counter = crypto.pbkdf2Sync(dadosLogin.counter, nice, 5, 16, "sha512").toString("hex")
        return loginModel.create({...dadosLogin, nice, counter});
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

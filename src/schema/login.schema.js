const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    nome: { type: String },
    sobrenome: {type: String},
    login: { type: String },
    senha: { type: String },
    admin: { type: Boolean }
});

const loginModel = mongoose.model("Credencial", loginSchema);

module.exports = loginModel;
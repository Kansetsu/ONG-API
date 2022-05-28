const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String },
    login: { type: String, required: true },
    counter: { type: String, required: true },
    nice: { type: String },
    usuario: { type: String, required: true },
});

const loginModel = mongoose.model("credencial", loginSchema);

module.exports = loginModel;

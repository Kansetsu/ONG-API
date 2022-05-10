const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    nome: { type: String },
    sobrenome: {type: String},
    login: { type: String },
    counter: { type: String },
    nice: { type: String },
    admin: { type: Boolean }
});

const loginModel = mongoose.model("credencial", loginSchema);

module.exports = loginModel;
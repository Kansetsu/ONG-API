const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    nomeCompleto: { type: String, required: true },
    login: { type: String, required: true },
    counter: { type: String, required: true },
    nice: { type: String },
    usuario: { type: String, required: true },
});

const loginModel = mongoose.model("credencial", loginSchema);

module.exports = loginModel;

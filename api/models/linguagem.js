'use strict';
// Import mongoose
const mongoose = require("mongoose");

// Declare schema and assign Schema class
const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
const LinguagemSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    pontuacao: {
        type: Number,
        required: true
    },
});

// create and export model
module.exports = mongoose.model("linguagem", LinguagemSchema);
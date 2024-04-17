"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var funcionario_1 = require("./src/model/funcionario");
// const cargoAtendente = new Cargo("Atendente");
var atendente = new funcionario_1.Funcionario(1500, "Atendente", "054.952.004-28", "Antônia Serafina", "(88) 99986-4829");
// const cargoGerente = new Cargo("Gerente");
var gerente = new funcionario_1.Funcionario(3000, "Gerente", "894.654.789-59", "José Maria", "(88) 99986-7832");
console.log(atendente);
console.log(gerente);

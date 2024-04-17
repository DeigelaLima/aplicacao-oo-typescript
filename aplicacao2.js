"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_1 = require("./src/model/cliente");
var endereco_1 = require("./src/model/endereco");
var enderecoP = new endereco_1.Endereco("63.899-78", "Rua joão de Machado", "222", "casa", "Juazeiro", "Ce");
var enderecoS = new endereco_1.Endereco("63.123-43", "Rua Maria da Cruz", "342", "casa", "Quixadá", "Ce");
var enderecoT = new endereco_1.Endereco("63.543-12", "Rua Felipe de Felicidade", "1890", "casa", "Fortaleza", "Ce");
var cliente = new cliente_1.Cliente("849.789.123-97", "Maria Apareceu", "(88) 9543-2354", true, [enderecoP, enderecoS, enderecoT]);
console.log(cliente.listarEnderecos());

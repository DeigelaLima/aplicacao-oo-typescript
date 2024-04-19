"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_1 = require("./src/model/cliente");
var contaCorrente_1 = require("./src/model/contaCorrente");
var cliente = new cliente_1.Cliente("152.789.254-29", "Esmeralda Benvinda", "(88)9 8753-5362", true, []);
var CC = new contaCorrente_1.ContaCorrente("0987387-3", 0);
cliente.adicionarConta(CC);
// Efetue três depósitos de 100 na conta corrente
CC.depositar(100);
CC.depositar(100);
CC.depositar(100);
// Efetue um saque de 50 na conta corrente
CC.sacar(50);
console.log("O valor do seu saldo \u00E9 R$ : ".concat(CC.calcularSaldo().toFixed(2)));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_1 = require("./src/model/cliente");
var contaCorrente_1 = require("./src/model/contaCorrente");
// Cliente com conta corrente 1
var clienteCC1 = new cliente_1.Cliente("528.815.895-29", "Fernando Luiz", "(88) 99658-8756", true, []);
var CC1 = new contaCorrente_1.ContaCorrente("87973-9", 100);
clienteCC1.adicionarConta(CC1);
// Efetuar depósito de 300 na conta corrente 1
CC1.depositar(300);
// Cliente com conta corrente 2
var clienteCC2 = new cliente_1.Cliente("456.231.789-25", "Marcleuda", "(88)9675-3256", true, []);
var CC2 = new contaCorrente_1.ContaCorrente("458658-8", 0);
clienteCC2.adicionarConta(CC2);
// Efetuar depósito de 100 na conta corrente 2
CC2.depositar(100);
CC1.transferir(CC2, 1000);
console.log("Saldo da conta corrente 1: ".concat(CC1.calcularSaldo()));
console.log("Saldo da conta corrente 2: ".concat(CC2.calcularSaldo()));

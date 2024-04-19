"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_1 = require("./src/model/cliente");
var contaCorrente_1 = require("./src/model/contaCorrente");
var contaPoupanca_1 = require("./src/model/contaPoupanca");
// Cliente com conta corrente
var clienteCC = new cliente_1.Cliente("528.815.895-29", "Fernando Luiz", "(88) 99658-8756", true, []);
var CC = new contaCorrente_1.ContaCorrente("87973-9", 100);
clienteCC.adicionarConta(CC);
// Efetuar depósito de 1000 na conta corrente
CC.depositar(1000);
// Cliente com conta poupaça
var clienteCP = new cliente_1.Cliente("456.231.789-25", "Marcleuda", "(88)9675-3256", true, []);
var CP = new contaPoupanca_1.ContaPoupanca("458658-8");
clienteCP.adicionarConta(CP);
// Efetuar depósito de 1000 na conta poupaça
CP.depositar(1000);
CC.transferir(CP, 500);
console.log("Saldo da conta corrente: ".concat(CC.calcularSaldo()));
console.log("Saldo da conta poupa\u00E7a: ".concat(CP.calcularSaldo()));

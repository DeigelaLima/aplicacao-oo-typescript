import { Cliente } from "./src/model/cliente";
import { ContaCorrente } from "./src/model/contaCorrente";
import { ContaPoupanca } from "./src/model/contaPoupanca";

// Cliente com conta corrente
const clienteCC = new Cliente("528.815.895-29", "Fernando Luiz", "(88) 99658-8756", true, []);
const CC = new ContaCorrente("87973-9", 0);
clienteCC.adicionarConta(CC);

// Efetuar depósito de 1000 na conta corrente
CC.depositar(1000);

// Cliente com conta poupaça
const clienteCP = new Cliente("456.231.789-25", "Marcleuda", "(88)9675-3256", true, []);
const CP = new ContaPoupanca("458658-8");
clienteCP.adicionarConta(CP);

// Efetuar depósito de 1000 na conta poupaça
CP.depositar(1000);

CC.transferir(CP, 500);

console.log(`Saldo da conta corrente: ${CC.calcularSaldo()}`);

console.log(`Saldo da conta poupaça: ${CP.calcularSaldo()}`);


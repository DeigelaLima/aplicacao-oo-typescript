import { Cliente } from "./src/model/cliente";
import { ContaCorrente } from "./src/model/contaCorrente";

// Cliente com conta corrente 1
const clienteCC1 = new Cliente("528.815.895-29", "Fernando Luiz", "(88) 99658-8756", true, []);
const CC1 = new ContaCorrente("87973-9", 100);
clienteCC1.adicionarConta(CC1);

// Efetuar depósito de 300 na conta corrente 1
CC1.depositar(300);

// Cliente com conta corrente 2
const clienteCC2 = new Cliente("456.231.789-25", "Marcleuda", "(88)9675-3256", true, []);
const CC2 = new ContaCorrente("458658-8", 0);
clienteCC2.adicionarConta(CC2);

// Efetuar depósito de 100 na conta corrente 2
CC2.depositar(100);

CC1.transferir(CC2, 1000);

console.log(`Saldo da conta corrente 1: ${CC1.calcularSaldo()}`);

console.log(`Saldo da conta corrente 2: ${CC2.calcularSaldo()}`);


import { Cliente } from "./src/model/cliente";
import { ContaCorrente } from "./src/model/contaCorrente";

const cliente = new Cliente("152.789.254-29", "Esmeralda Benvinda", "(88)9 8753-5362", true, []);

const CC = new ContaCorrente("0987387-3", 0);

cliente.adicionarConta(CC);

// Efetue três depósitos de 100 na conta corrente
CC.depositar(100);
CC.depositar(100);
CC.depositar(100);

// Efetue um saque de 50 na conta corrente
CC.sacar(50);

console.log(`O valor do seu saldo é R$ : ${CC.calcularSaldo().toFixed(2)}`);


import { Conta } from "./conta";

export class ContaCorrente extends Conta {

    private limite: number;

    constructor(numero: string, limite: number) {
        super(numero);
        this.limite = limite;
    }

    public transferir(contaDestino: Conta, valor: number): void {
        const saldoDisponivel = this.saldo + this.limite;
        if(valor > 0 && saldoDisponivel >= valor) {
            // Desuz o valor do saldo atual usando o método set
            this.saldo -= valor;
            // Adiciona o valor ao saldo da conta de destino usando o método set
            contaDestino.saldo += valor;
            console.log(`Transferência de R${valor} realizada com sucesso.`);
       } else {
        console.log("Transferência não realizada. Saldo insuficiente.");
       }
    }

    calcularSaldo(): number {
        return this.saldo - this.limite;
    }
}
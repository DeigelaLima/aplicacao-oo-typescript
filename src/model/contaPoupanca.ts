import { Conta } from "./conta";
import { Credito } from "./credito";
import { Debito } from "./debito";

export class ContaPoupanca extends Conta{

    public calcularSaldo () : number {
        let saldoFinal = this.saldo; // Começa com o saldo atual da conta

        // Soma todos os créditos associados à conta
        this.movimentos.forEach((movimento) => {
            if (movimento instanceof Credito) {
                saldoFinal += movimento.valor;
            }
        });

         // Subtrai todos os débitos associados à conta
         this.movimentos.forEach(movimento => {
            if (movimento instanceof Debito) {
                saldoFinal -= movimento.valor;
            }
        });

        return saldoFinal;
    }
}
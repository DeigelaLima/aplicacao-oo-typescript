import { Credito } from "./credito";
import { Debito } from "./debito";

export abstract class Conta {
   
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    public depositar(valor: number, data: number): void {
        const credito = new Credito(valor, data);
        this.saldo += valor;
    }

    public sacar(valor: number, data: number): boolean {
        if (valor <= this.saldo) {
            const debito = new Debito(valor, data);
            this.saldo -= valor;
            return true; 
        } else {
            return false; 
        }
    }
}

import { Conta } from "./conta";

export class ContaCorrente extends Conta {

    private limite: number;

    constructor(saldoInicial: number, limite: number) {
        super(saldoInicial);
        this.limite = limite;
    }


    public transferir(contaDestino: Conta, valor: number): void {
       
    }

    calcularSaldo(): number {
        
    }
}
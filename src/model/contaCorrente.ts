import { Conta } from "./conta";

export class ContaCorrente extends Conta {

    private limite: number;

    constructor(numero: string, limite: number) {
        super(numero);
        this.limite = limite;
    }

    public calcularSaldo(): number {
        return super.calcularSaldo() + this.limite;
    }

    public transferir(contaDestino: Conta, valor: number): void {
        if(valor > 0 && this.calcularSaldo() >= valor) {
            this.sacar(valor); // retira da conta atual 
            contaDestino.depositar(valor); // adiciona na conta destino
        } 
    }

}
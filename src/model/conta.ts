import { Credito } from "./credito";
import { Debito } from "./debito";

export abstract class Conta {
   
    private _numero: string;
    private _creditos: Credito[];
    private _debitos: Debito[];

    constructor(numero: string) {
        this._numero = numero;
        this._creditos = [];
        this._debitos = [];
    }

    public calcularSaldo(): number {
        var saldoFinal: number = 0;

        for(let credito of this._creditos) {
            saldoFinal += credito.valor;
        }

        for(let debito of this._debitos) {
            saldoFinal -= debito.valor;
        }
        return saldoFinal;
    }

    public depositar(valor: number): void {
        const credito = new Credito(valor, new Date());
        this._creditos.push(credito);
    }

    public sacar(valor: number): void {
        if (valor <= this.calcularSaldo()) {
            const debito = new Debito(valor, new Date());
            this._debitos.push(debito);  
        } 
    }

}

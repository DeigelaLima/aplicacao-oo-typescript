import { Credito } from "./credito";
import { Debito } from "./debito";

export abstract class Conta {
   
    private _saldo: number;
    private _movimentos: (Credito | Debito)[] = []; // Array para armazenar movimentos

    constructor(saldoInicial: number) {
        this._saldo = saldoInicial;
    }

    public depositar(valor: number, data: number): void {
        const credito = new Credito(valor, data);
        this.movimentos.push(credito); // Adiciona o crédito aos movimentos
        this._saldo += valor;
    }

    public sacar(valor: number, data: number): boolean {
        if (valor <= this._saldo) {
            const debito = new Debito(valor, data);
            this.movimentos.push(debito); // Adiciona o débito aos movimentos
            this._saldo -= valor;
            return true; 
        } else {
            return false; 
        }
    }

    public get saldo(): number {
        return this._saldo;
    }

    public set saldo(valor: number) {
        this._saldo = valor;
    }

     public get movimentos(): (Credito | Debito)[] {
        return this._movimentos;
    }

    public set movimentos(movimentos: (Credito | Debito)[]) {
        this._movimentos = movimentos;
    }
}

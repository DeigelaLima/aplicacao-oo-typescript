import { Credito } from "./credito";
import { Debito } from "./debito";

export abstract class Conta {
   
    private _numero: string;
    private _saldo: number;
    private _movimentos: (Credito | Debito)[] = []; // Array para armazenar movimentos

    constructor(numero: string) {
        this._numero = numero;
        this._saldo = 0;
    }

    public depositar(valor: number): void {
        // const credito = new Credito(valor);
        this._saldo += valor;
    }

    public sacar(valor: number): void {
        if (valor <= this._saldo) {
            this._saldo -= valor; 
        } else {
            console.log("Seu saldo é insuficiente!")
        }
    }

    public get saldo(): number {
        return this._saldo;
    }

    public set saldo(valor: number) {
        this._saldo = valor;
    }
}

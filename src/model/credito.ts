import { Conta } from "./conta";

export class Credito extends Conta {

    private _valor: number;
    private _data: number;


    constructor(_numero: string, valor: number, data: number) {
        super(_numero);
        this._valor = valor;
        this._data = data;
    }

    public get valor(): number {
        return this._valor;
    }

    public set valor(valor: number) {
        this._valor = valor;
    }

    public get data(): number {
        return this._data;
    }

    public set data(data: number) {
        this._data = data;
    }
}
import { Cargo } from "./cargo";
import { Pessoa } from "./pessoa";
// import { IUsuario } from "./IUsuario";

export class Funcionario extends Pessoa implements IUsuario {
    
    private _salario: number;
    private _cargo: string;

    constructor(salario: number, cargo: string, cpf: string, nome: string, telefone: string) {
        super(cpf, nome, telefone);
        this._salario = salario;
        this._cargo = cargo;
    }
    
    public get salario(): number {
        return this._salario;
    }
    
    public set salario(value: number) {
        this._salario = value;
    }

    public get cargo(): string { 
        return this._cargo;
    }

    public set cargo(value: string) {
        this._cargo = value;
    }

    autenticar(): boolean {
        return true;
    }

}
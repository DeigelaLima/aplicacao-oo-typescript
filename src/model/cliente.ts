import { Conta } from "./conta";
import { ContaCorrente } from "./contaCorrente";
import { Endereco } from "./endereco";
import { Pessoa } from "./pessoa";
import { IUsuario } from "./IUsuario";

export class Cliente extends Pessoa implements IUsuario {
    
    private _vip: boolean;
    private _enderecos: Endereco[] = [];
    private _conta: Conta [] = [];

    constructor(cpf: string, nome: string, telefone: string, vip: boolean, enderecos: Endereco[]) {
        super(cpf, nome, telefone);
        this._enderecos = enderecos;
        this._vip = vip;
    }

    public listarEnderecos(): Endereco[] {
        return this._enderecos;
    }

    autenticar(): boolean {
        return true;
    }

    public adicionarConta(conta: Conta): void {
        this._conta.push(conta);
    }

    public adicionarEndereco(endereco: Endereco): void {
        this._enderecos.push(endereco);
    }

}
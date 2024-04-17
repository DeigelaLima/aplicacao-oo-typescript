import { Endereco } from "./endereco";
import { Pessoa } from "./pessoa";

export class Cliente extends Pessoa implements IUsuario {
    
    private vip: boolean;
    private enderecos: Endereco[];

    constructor(cpf: string, nome: string, telefone: string, enderecos: Endereco[], vip: boolean) {
        super(cpf, nome, telefone);
        this.enderecos = enderecos;
        this.vip = vip;
    }

    public listarEnderecos(): Endereco[] {
        return this.enderecos;

    }

    autenticar(): boolean {
        throw new Error("Method not implemented.");
    }

}
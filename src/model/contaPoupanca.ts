import { Conta } from "./conta";
import { Credito } from "./credito";
import { Debito } from "./debito";

export class ContaPoupanca extends Conta{

    public calcularSaldo () : number {
        return super.calcularSaldo(); 
    }
}
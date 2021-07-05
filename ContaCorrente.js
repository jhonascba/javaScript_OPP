import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    constructor(agencia, conta, cliente) {
        super(agencia, conta, cliente);
    }

    //Método sobrescreve o original  
    sacar(valor){
        if (valor > 0 && valor <= this._saldo) {
            this._saldo -= valor;
            return valor;
        }
        console.error("Valor Inválido!")
    }

    tarifa(){
        const tarifa = 19.90;
        this._saldo -= tarifa;
    }
}


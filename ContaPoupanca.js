import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(agencia, conta, cliente) {
        super(agencia, conta, cliente);
    }

    //Sobrescreve método original
    sacar(valor) {
        if (valor > 0 && valor <= this._saldo) {
            this._saldo -= valor;
            return valor;
        }
        console.error("Valor Inválido!")
    }

    rendeJuros(){
        const taxaMensal = 0.0024;
        const rendimento = (this._saldo * taxaMensal);
        this.depositar(rendimento);
    }

}

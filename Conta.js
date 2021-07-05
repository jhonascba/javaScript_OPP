//Classe Abstrata
export class Conta {
    constructor(agencia, conta, cliente) {
        this._agencia = agencia;
        this._conta = conta;
        this._cliente = cliente;
        this._saldo = 0.00
    }

    //Getters e Setters
    get agencia() {
        return this._agencia;
    }

    get conta() {
        return this._conta;
    }

    get saldo() {
        return this._saldo;
    }

    //Métodos

    //Método abstrato que permite que seja sobrescrito conforme a necessidade da modalidade da conta
    sacar() {
        throw new error ("Método abstrato!")
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            return valor;
        }
        console.error("Valor inválido!");
    }

    transferir(valor, contaDestino){
            this.sacar(valor);
            contaDestino.depositar(valor);
    }
}

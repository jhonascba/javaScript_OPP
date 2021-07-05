export class Cliente{
    constructor(nome, cpf){
        this._nome = nome;
        this._cpf = cpf;
    }

    //Getters e Setters
    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get cpf() {
        return this._cpf;
    }
}
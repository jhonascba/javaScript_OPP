import { ContaCorrente } from "./ContaCorrente.js";
import { Cliente } from "./Cliente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente = new Cliente("Pedro Souza", "547.144.998-14");
const cliente2 = new Cliente("Sarah Almeida", "041.555.687.10")

const conta1 = new ContaCorrente("1001", "54.748-1", cliente);
const conta2 = new ContaCorrente("1001", "57.209-1", cliente2);

conta1.depositar(800.10);
conta2.depositar(1714.55);

conta1.transferir(100.0, conta2);
conta1.tarifa();

console.log(conta1);
console.log(conta2);

const poupanca1 = new ContaPoupanca("1001", "10.470-1", cliente);
poupanca1.depositar(800);
poupanca1.rendeJuros();


console.log(poupanca1);

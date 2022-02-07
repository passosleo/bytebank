import {
  Cliente
} from "./Cliente.js"
import {
  ContaCorrente
} from "./ContaCorrente.js"
import {
  ContaPoupanca
} from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
// const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrente = new ContaCorrente(cliente1, 1001);
contaCorrente.depositar(500);
contaCorrente.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(1000);
contaSalario.sacar(100)

// const conta2 = new ContaCorrente(1002, cliente2);
// conta1.transferir(200,conta2)

console.log(contaSalario);
console.log(contaCorrente);
console.log(contaPoupanca);
